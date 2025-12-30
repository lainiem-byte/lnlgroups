import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Lightbulb, Sparkles, Building, GraduationCap, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import raleighOutreach from "@/data/raleigh_outreach.json";

const targetIcons: Record<string, React.ReactNode> = {
  "Glenwood South Lifestyle / Hospitality": <Sparkles className="w-5 h-5" />,
  "North Hills Tech / Modern Professional": <Building className="w-5 h-5" />,
  "Durham Innovation / American Tobacco Campus": <GraduationCap className="w-5 h-5" />
};

const targetLabels: Record<string, string> = {
  "Glenwood South Lifestyle / Hospitality": "Glenwood South",
  "North Hills Tech / Modern Professional": "North Hills Tech",
  "Durham Innovation / American Tobacco Campus": "Durham Innovation"
};

const lainieTips: Record<string, string> = {
  "The Vibrant Pulse": "Glenwood South moves fast. These are hospitality pros who see pitches daily. Lead with energy and specificity—the 'shoot day' ask is tactical because it's low commitment and shows you're already in motion.",
  "Scalable Authority": "North Hills professionals think in growth trajectories. They want partners who see where the market is heading. The 'Triangle Vision' framing positions you as someone building infrastructure, not just services.",
  "The Heritage Architect": "The American Tobacco Campus is where Durham's past meets its tech future. These founders appreciate the heritage angle—they're building on historic ground. The Flux.1 mention signals you're technically current but rooted in long-term vision."
};

export default function RaleighToolbox() {
  const { toast } = useToast();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");

  const scripts = raleighOutreach.raleigh_engagement;
  const currentScript = scripts[selectedIndex];

  const getPersonalizedScript = (script: string) => {
    return script
      .replace("{{business_name}}", businessName || "[Business Name]")
      .replace("{{contact_name}}", contactName || "[Contact Name]");
  };

  const copyToClipboard = async (index: number) => {
    const script = getPersonalizedScript(scripts[index].script);
    await navigator.clipboard.writeText(script);
    setCopiedIndex(index);
    toast({
      title: "Script copied!",
      description: "Ready to paste into your outreach message.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl border border-lnl-violet/20 bg-gradient-to-br from-[#1a1625] via-background to-[#1a1a2e]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lnl-violet/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <Triangle className="w-6 h-6 text-lnl-violet" />
            <span className="text-xs font-mono uppercase tracking-widest text-lnl-violet/80">Innovation Hub</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-2">
            Raleigh-Durham Outreach Toolbox
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Forward-thinking scripts for the Triangle's elite growth market. From Glenwood South energy to Durham's tech renaissance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {scripts.map((script, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative p-4 rounded-2xl text-left transition-all duration-300 border ${
                  selectedIndex === index
                    ? "bg-lnl-violet/20 border-lnl-violet/50 shadow-lg shadow-lnl-violet/10"
                    : "bg-secondary/20 border-white/5 hover:bg-secondary/40 hover:border-white/10"
                }`}
              >
                <div className={`mb-2 ${selectedIndex === index ? "text-lnl-violet" : "text-muted-foreground"}`}>
                  {targetIcons[script.target]}
                </div>
                <div className={`font-semibold text-sm ${selectedIndex === index ? "text-white" : "text-muted-foreground"}`}>
                  {targetLabels[script.target]}
                </div>
                <div className="text-xs text-muted-foreground/70 mt-1">{script.type}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Business Name (optional)</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g., Transfer Food Hall"
                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-lnl-violet/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Contact Name (optional)</label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g., Jordan"
                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-lnl-violet/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-lnl-violet">{currentScript.type}</span>
                    <h4 className="text-lg font-semibold text-white mt-1">{targetLabels[currentScript.target]}</h4>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(selectedIndex)}
                    className={`rounded-xl transition-all ${
                      copiedIndex === selectedIndex
                        ? "bg-green-600 hover:bg-green-600"
                        : "bg-lnl-violet hover:bg-lnl-violet/80"
                    }`}
                  >
                    {copiedIndex === selectedIndex ? (
                      <>
                        <Check className="w-4 h-4 mr-2" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" /> Copy Script
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="bg-secondary/30 rounded-xl p-5 border border-white/5">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {getPersonalizedScript(currentScript.script)}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-lnl-violet/10 to-purple-900/10 rounded-2xl border border-lnl-violet/20 p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-lnl-violet/20 text-lnl-violet shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1 flex items-center gap-2">
                      Lainie's Tip
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lainieTips[currentScript.type]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
