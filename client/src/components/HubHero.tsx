import { motion } from "framer-motion";
import { ArrowRight, Palette, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HubHero() {
  return (
    <section className="relative w-full min-h-screen pt-20 overflow-hidden" style={{ backgroundColor: '#0A0A0B' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#008080]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#2E5BFF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-16 pb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-medium mb-8 border border-white/10">
            <Sparkles className="w-4 h-4" />
            THE LNL GROUP
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
            Identity & Intelligence for the<br />
            <span className="bg-gradient-to-r from-[#008080] via-lnl-gold to-[#2E5BFF] bg-clip-text text-transparent">Modern Enterprise</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Bridging the gap between how your business looks and how it actually runs. Founded by Lainie Mayfield, The LNL Group provides the visual authority and automated logic required to scale without burnout.
          </p>
          
          <Button 
            size="lg" 
            className="rounded-full px-10 h-14 text-lg font-semibold bg-lnl-gold hover:bg-lnl-gold/90 text-black"
            data-testid="button-workflow-audit"
          >
            Book Your 15-Minute Workflow Audit <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/creatives" className="block">
              <div className="glass-card rounded-3xl p-10 h-full cursor-pointer group transition-all duration-500 hover:border-[#008080]/50 relative overflow-hidden" style={{ borderColor: 'rgba(0, 128, 128, 0.2)' }} data-testid="card-creative-authority">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#008080] to-[#008080]/50" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#008080]/20 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(0, 128, 128, 0.2)' }}>
                    <Palette className="w-7 h-7 text-[#008080]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#008080] uppercase tracking-wider">LNL Creative</p>
                    <h2 className="text-3xl font-extrabold text-white">Creative Authority</h2>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  Visual Authority for the Category-of-One. If your brand doesn't look like the price you want to charge, you are leaving money on the table.
                </p>
                
                <div className="flex items-center gap-2 text-[#008080] font-semibold group-hover:gap-4 transition-all">
                  Explore Brand Services <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="/automations" className="block">
              <div className="glass-card rounded-3xl p-10 h-full cursor-pointer group transition-all duration-500 hover:border-[#2E5BFF]/50 relative overflow-hidden" style={{ borderColor: 'rgba(46, 91, 255, 0.2)' }} data-testid="card-workflow-intelligence">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E5BFF] to-[#2E5BFF]/50" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#2E5BFF]/20 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(46, 91, 255, 0.2)' }}>
                    <Cpu className="w-7 h-7 text-[#2E5BFF]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2E5BFF] uppercase tracking-wider">LNL Automations</p>
                    <h2 className="text-3xl font-extrabold text-white">Workflow Intelligence</h2>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  Scale Without the Headcount. Custom AI Agents & Workflows designed for the modern small business owner.
                </p>
                
                <div className="flex items-center gap-2 text-[#2E5BFF] font-semibold group-hover:gap-4 transition-all">
                  Explore Automation Services <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}