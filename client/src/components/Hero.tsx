import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroTexture from "@assets/generated_images/abstract_neo-brutalist_halftone_grid_pattern_with_bold_geometric_shapes.png";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col border-b-2 border-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `url(${heroTexture})`, backgroundSize: 'cover' }} />
      
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center relative z-10 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] mb-8">
            WE BUILD <br />
            <span className="text-primary bg-black px-2 inline-block -rotate-1">DIGITAL</span> <br />
            CHAOS.
          </h1>
          
          <p className="text-xl md:text-2xl font-medium max-w-2xl mb-12 border-l-4 border-primary pl-6">
            We are a digital agency that rejects the mundane. We create bold, high-contrast, and unforgettable web experiences.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <button className="brutal-btn bg-black text-white hover:bg-black/90 border-black text-xl px-8 py-4 flex items-center gap-2 group">
              Start Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="brutal-btn bg-white border-black text-xl px-8 py-4">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full bg-primary border-t-2 border-black py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-2xl font-bold uppercase tracking-wider">
          {[1,2,3,4,5,6,7,8].map(i => (
             <span key={i}>/// WEB DESIGN /// BRANDING /// DEVELOPMENT /// STRATEGY</span>
          ))}
        </div>
      </div>
    </section>
  );
}