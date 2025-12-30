import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Store, Camera, TrendingUp, ChevronRight } from "lucide-react";
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
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {locationsData.locations.map((loc) => (
          <Button
            key={loc.id}
            variant={selectedLocationId === loc.id ? "default" : "outline"}
            onClick={() => setSelectedLocationId(loc.id)}
            className={`rounded-full px-6 py-6 text-lg transition-all duration-300 ${
              selectedLocationId === loc.id 
                ? "shadow-lg scale-105 font-bold" 
                : "hover:bg-secondary/50 border-primary/20"
            }`}
          >
            {loc.city}
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLocationId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {/* Hero Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600">
                {currentLocation.theme}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {currentLocation.copy}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {currentLocation.hashtags.map((tag, i) => (
                <span key={i} className="text-sm font-mono text-primary bg-primary/5 px-3 py-1 rounded-md border border-primary/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Local Authority Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Priority Neighborhoods
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentLocation.neighborhoods.map((n, i) => (
                  <span key={i} className="bg-secondary/50 px-3 py-1.5 rounded-lg text-sm font-medium">
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <Store className="w-4 h-4 text-primary" /> 2025 Landmarks & Geotags
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentLocation.landmarks.map((l, i) => (
                  <span key={i} className="bg-secondary/50 px-3 py-1.5 rounded-lg text-sm font-medium">
                    {l}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Local Authority Strategy Card (New from provided snippet) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50"
            >
               <h4 className="text-lg font-bold mb-4">Local Authority Strategy</h4>
               <div className="p-4 bg-background/50 border-l-4 border-primary rounded-r-lg">
                 <p className="text-sm text-muted-foreground italic">
                   "Custom is the Map; Brand Growth is the Guide. Our {selectedLocationId === 'raleigh' ? 'Brand Growth Tier' : 'Custom Content Pack'} includes specific targeting for this region's 2025 demographics."
                 </p>
               </div>
            </motion.div>
          </div>

          {/* Brand Growth Value Add (Case Study) */}
          <div className="bg-gradient-to-br from-secondary/30 to-background rounded-3xl border border-border overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <img 
                  src={getCaseStudyImage()} 
                  alt={currentLocation.case_study.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/50"></div>
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-2 opacity-90">
                    <TrendingUp className="w-4 h-4" /> 
                    {selectedLocationId === 'raleigh' ? 'Brand Growth Spotlight' : 'Case Study'}
                  </div>
                  <div className="text-2xl font-bold">{currentLocation.case_study.location}</div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">{currentLocation.case_study.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">{currentLocation.case_study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">The Solution</h4>
                    <p className="text-foreground font-medium">{currentLocation.case_study.solution}</p>
                  </div>
                </div>

                {selectedLocationId === 'raleigh' && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-primary font-bold mb-2">
                      <Camera className="w-5 h-5" />
                      <span>Raleigh Exclusive: Monthly On-Site Shoots</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Our Raleigh Brand Growth package includes dedicated photography sessions in Glenwood South and North Hills every month.
                    </p>
                    <Button className="w-full sm:w-auto group">
                      View Raleigh Packages 
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}