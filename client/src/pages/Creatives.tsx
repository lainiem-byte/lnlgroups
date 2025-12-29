import { Check, MapPin, Camera, TrendingUp, Smartphone, Filter, ChevronDown, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
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

export default function Creatives() {
  const [filter, setFilter] = useState("All");
  const [selectedLocationId, setSelectedLocationId] = useState("raleigh");

  const currentLocation = locationsData.locations.find(l => l.id === selectedLocationId) || locationsData.locations[0];
  
  const filteredItems = filter === "All" 
    ? currentLocation.portfolio 
    : currentLocation.portfolio.filter(item => item.category === filter);

  // Helper to get image source (handles both key-mapped local imports and direct URLs)
  const getImage = (item: any) => {
    if (item.image_key && imageMap[item.image_key]) {
      return imageMap[item.image_key];
    }
    return item.image_url || "";
  };

  const getCaseStudyImage = () => {
    const key = currentLocation.case_study.image_key;
    return key && imageMap[key] ? imageMap[key] : "";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-secondary/20 border-b border-border transition-colors duration-500">
          <div className="container mx-auto px-6 text-center">
            
            {/* Location Selector */}
            <div className="flex justify-center mb-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full pl-4 pr-6 py-6 border-primary/20 bg-background hover:bg-secondary/50 transition-all text-lg group">
                    <MapPin className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-bold">{currentLocation.city}</span>
                    <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2 bg-background/95 backdrop-blur-xl">
                  {locationsData.locations.map((loc) => (
                    <DropdownMenuItem 
                      key={loc.id} 
                      onClick={() => setSelectedLocationId(loc.id)}
                      className={`cursor-pointer rounded-lg py-3 px-4 mb-1 last:mb-0 ${selectedLocationId === loc.id ? 'bg-primary/10 text-primary font-bold' : ''}`}
                    >
                      {loc.city}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
               <span className="tech-gradient-text">{currentLocation.theme}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              {currentLocation.copy}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              {currentLocation.hashtags.map((tag, i) => (
                <span key={i} className="text-sm font-mono text-primary bg-primary/5 px-3 py-1 rounded-md border border-primary/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Local Authority Portfolio */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Local Authority Content</h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Showcasing brands that own their local narrative in {currentLocation.city}.
                </p>
              </div>
              
              <div className="flex gap-2">
                {["All", "Content Only", "Full Management"].map((f) => (
                  <Button 
                    key={f}
                    variant={filter === f ? "default" : "outline"}
                    onClick={() => setFilter(f)}
                    className="rounded-full"
                    size="sm"
                  >
                    {f}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group cursor-pointer animate-in fade-in zoom-in-95 duration-500">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 border border-border/50">
                    <img 
                      src={getImage(item)} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10 flex items-center gap-1.5 shadow-lg">
                      <MapPin className="w-3 h-3 text-primary" />
                      {item.location}
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                       {item.tags.map((tag, i) => (
                         <span key={i} className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Custom Content Pack */}
              <div className="rounded-3xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                <h3 className="text-2xl font-bold mb-2">Custom Content Pack</h3>
                <div className="text-4xl font-bold mb-4">{currentLocation.pricing.custom}<span className="text-lg text-muted-foreground font-medium">/mo</span></div>
                <p className="text-muted-foreground mb-8">Perfect for establishing a strong digital footprint with hyper-local relevance.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="font-semibold text-primary flex items-center gap-2">
                    <Smartphone className="w-5 h-5" /> Digital Localization
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{currentLocation.value_add_custom}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Content Calendar & Scheduling</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Monthly Analytics Report</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full rounded-full" variant="outline">Get Started</Button>
              </div>

              {/* Brand Growth Tier */}
              <div className="rounded-3xl border-2 border-primary bg-card p-8 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Brand Growth Tier</h3>
                <div className="text-4xl font-bold mb-4">{currentLocation.pricing.growth}<span className="text-lg text-muted-foreground font-medium">/mo</span></div>
                <p className="text-muted-foreground mb-8">Complete market domination with physical presence and targeted advertising.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="font-semibold text-primary flex items-center gap-2">
                    <Camera className="w-5 h-5" /> Physical Presence
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>{currentLocation.value_add_growth}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span><strong>Geo-Targeted Ad Setup</strong> (Meta/Google)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>Comprehensive Ad Reporting & Analytics</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90">Scale Your Brand</Button>
              </div>

            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div key={currentLocation.id + "-img"} className="w-full md:w-1/2 relative group animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3 transition-transform group-hover:rotate-6"></div>
                <img 
                  src={getCaseStudyImage()} 
                  alt={currentLocation.case_study.title} 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-white font-bold text-lg">{currentLocation.case_study.location}</div>
                  <div className="text-white/80 text-sm">{currentLocation.city}</div>
                </div>
              </div>
              
              <div key={currentLocation.id + "-txt"} className="w-full md:w-1/2 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
                  {currentLocation.id === 'columbus' ? <Store className="w-4 h-4" /> : currentLocation.id === 'moscow' ? <Camera className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                  {currentLocation.id === 'columbus' ? 'Market Spotlight' : currentLocation.id === 'moscow' ? 'Boutique Spotlight' : 'Case Study'}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{currentLocation.case_study.title}</h2>
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <h4 className="font-bold mb-1">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">{currentLocation.case_study.challenge}</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <h4 className="font-bold mb-1">Our Solution</h4>
                    <p className="text-sm text-muted-foreground">{currentLocation.case_study.solution}</p>
                  </div>
                </div>
                <div className="flex gap-8 border-t border-border pt-8">
                  <div>
                    <div className="text-3xl font-bold text-foreground">340%</div>
                    <div className="text-sm text-muted-foreground">Engagement Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">22</div>
                    <div className="text-sm text-muted-foreground">Qualified Leads/Mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}