import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Store, Camera, TrendingUp, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import locationsData from "@/data/locations.json";

// Import images
import glenwoodImage from "@assets/generated_images/glenwood_south_raleigh_modern_nightlife_street_scene.png";
import raleighRealtyImage from "@assets/generated_images/raleigh_glenwood_south_boutique_shops_and_outdoor_dining.png";
import columbusImage from "@assets/generated_images/columbus_oh_short_north_arts_district_vibrant_street_scene.png";
import germanVillageImage from "@assets/generated_images/german_village_columbus_ohio_historic_brick_lined_streets.png";
import moscowImage from "@assets/generated_images/moscow_idaho_downtown_main_street_with_palouse_hills_background.png";

const imageMap: Record<string, string> = {
  glenwood: glenwoodImage,
  raleighRealty: raleighRealtyImage,
  columbus: columbusImage,
  germanVillage: germanVillageImage,
  moscow: moscowImage
};

export default function LocationShowcase() {
  const [selectedLocationId, setSelectedLocationId] = useState("raleigh");

  const currentLocation = locationsData.locations.find(l => l.id === selectedLocationId) || locationsData.locations[0];

  const getCaseStudyImage = () => {
    const key = currentLocation.case_study.image_key;
    return key && imageMap[key] ? imageMap[key] : "";
  };

  return (
    <div className="w-full">
      {/* Location Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {locationsData.locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLocationId(loc.id)}
            className={`relative group px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 overflow-hidden ${
              selectedLocationId === loc.id 
                ? "text-white" 
                : "text-muted-foreground hover:text-foreground bg-secondary/30 hover:bg-secondary/50 border border-white/5"
            }`}
          >
            {selectedLocationId === loc.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-lnl-violet"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{loc.city}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLocationId}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          {/* Hero Content */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-lnl-violet/5 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-tight relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-lnl-violet to-lnl-cyan">
                {currentLocation.theme}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed relative z-10 font-light">
              {currentLocation.copy}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8 relative z-10">
              {currentLocation.hashtags.map((tag, i) => (
                <span key={i} className="text-sm font-mono text-lnl-violet bg-lnl-violet/10 px-4 py-1.5 rounded-full border border-lnl-violet/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
            {/* Neighborhoods */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-lnl-violet/30 transition-colors"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lnl-violet" /> Priority Neighborhoods
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentLocation.neighborhoods.map((n, i) => (
                  <span key={i} className="bg-secondary/50 hover:bg-lnl-violet/20 hover:text-lnl-violet px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-default border border-transparent hover:border-lnl-violet/30">
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Landmarks */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-lnl-violet/30 transition-colors"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <Store className="w-4 h-4 text-lnl-violet" /> 2025 Landmarks & Geotags
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentLocation.landmarks.map((l, i) => (
                  <span key={i} className="bg-secondary/50 hover:bg-lnl-violet/20 hover:text-lnl-violet px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-default border border-transparent hover:border-lnl-violet/30">
                    {l}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Strategy Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-lnl-violet/10 via-background to-background p-1 rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lnl-violet/20 to-transparent opacity-50 blur-xl" />
              <div className="relative bg-card/80 backdrop-blur-md p-8 rounded-[22px] border border-white/5 h-full">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                   <div>
                     <h4 className="text-lg font-display text-white mb-2 flex items-center gap-2">
                       <TrendingUp className="w-5 h-5 text-lnl-violet" />
                       Local Authority Strategy
                     </h4>
                     <p className="text-muted-foreground max-w-2xl">
                       "Custom is the Map; Brand Growth is the Guide. Our {selectedLocationId === 'raleigh' ? 'Brand Growth Tier' : 'Custom Content Pack'} includes specific targeting for this region's 2025 demographics."
                     </p>
                   </div>
                   <Button variant="outline" className="border-lnl-violet/30 hover:bg-lnl-violet/10 text-lnl-violet shrink-0">
                     View Strategy Details <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Showcase */}
          <div className="bg-card/30 rounded-3xl border border-white/5 overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto min-h-[400px] overflow-hidden group">
                <img 
                  src={getCaseStudyImage()} 
                  alt={currentLocation.case_study.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/80"></div>
                
                <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3 text-lnl-violet bg-black/50 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/10">
                    {selectedLocationId === 'raleigh' ? 'Featured Growth Market' : 'Case Study'}
                  </div>
                  <div className="text-3xl font-display mb-2">{currentLocation.case_study.location}</div>
                  <p className="text-white/80 text-sm line-clamp-2">{currentLocation.case_study.challenge}</p>
                </div>
              </div>
              
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-card/50 backdrop-blur-sm">
                <h3 className="text-3xl font-display mb-8 text-white">{currentLocation.case_study.title}</h3>
                
                <div className="space-y-8">
                  <div className="pl-6 border-l-2 border-white/10">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">The Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">{currentLocation.case_study.challenge}</p>
                  </div>
                  
                  <div className="pl-6 border-l-2 border-lnl-violet">
                    <h4 className="text-xs font-bold text-lnl-violet uppercase tracking-wide mb-2">The Solution</h4>
                    <p className="text-foreground font-medium leading-relaxed">{currentLocation.case_study.solution}</p>
                  </div>
                </div>

                {selectedLocationId === 'raleigh' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 pt-8 border-t border-white/5"
                  >
                    <div className="flex items-center gap-3 text-white font-medium mb-3">
                      <div className="p-2 rounded-full bg-lnl-violet/20 text-lnl-violet">
                        <Camera className="w-5 h-5" />
                      </div>
                      <span>Monthly On-Site Shoots</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 pl-12">
                      Our Raleigh Brand Growth package includes dedicated photography sessions in Glenwood South and North Hills every month.
                    </p>
                    <Button className="w-full sm:w-auto group bg-lnl-violet hover:bg-lnl-violet/90 text-white border-0">
                      Explore Raleigh Packages 
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}