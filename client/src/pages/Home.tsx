import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LNLAutomations from "@/components/LNLAutomations";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <LNLAutomations />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        
        <footer className="py-16 border-t border-border/50 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground mb-6">
              <p className="font-medium">Serving: Raleigh, NC | Columbus, OH | Moscow, ID</p>
              <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className="text-center text-xs text-muted-foreground/70 pt-6 border-t border-border/30">
              <p>© 2026 The LNL Group. All AI solutions built by LNL Group adhere to strict Data Sovereignty protocols.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}