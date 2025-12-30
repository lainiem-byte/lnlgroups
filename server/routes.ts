import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

async function forwardToWebhook(leadData: any): Promise<boolean> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.log("[Webhook] No N8N_WEBHOOK_URL configured, skipping webhook forward");
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...leadData,
        source: "LNL Group Website",
        routeTo: "Lainie's Google Tasks",
        timestamp: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      console.log("[Webhook] Lead successfully forwarded to n8n workflow");
      return true;
    } else {
      console.error("[Webhook] Failed to forward lead:", response.status);
      return false;
    }
  } catch (error) {
    console.error("[Webhook] Error forwarding lead:", error);
    return false;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      const webhookSent = await forwardToWebhook(validatedData);
      
      res.json({
        ...lead,
        webhookSent,
        message: "Lead is being routed to Lainie's Google Tasks"
      });
    } catch (error) {
      res.status(400).json({ error: "Invalid lead data" });
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve leads" });
    }
  });

  return httpServer;
}
