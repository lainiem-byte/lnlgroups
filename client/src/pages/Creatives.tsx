import { Check, MapPin, Camera, TrendingUp, Smartphone, Filter, ChevronDown, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import glenwoodImage from "@assets/generated_images/glenwood_south_raleigh_modern_nightlife_street_scene.png";
import raleighRealtyImage from "@assets/generated_images/raleigh_glenwood_south_boutique_shops_and_outdoor_dining.png";
import columbusImage from "@assets/generated_images/columbus_oh_short_north_arts_district_vibrant_street_scene.png";
import germanVillageImage from "@assets/generated_images/german_village_columbus_ohio_historic_brick_lined_streets.png";
import moscowImage from "@assets/generated_images/moscow_idaho_downtown_main_street_with_palouse_hills_background.png";
import { useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const locations = [
  {
    id: "raleigh",
    city: "Raleigh / Durham, NC",
    theme: "High-Growth Tech Meets Historic Charm",
    neighborhoods: ["Glenwood South", "North Hills", "Downtown Durham"],
    copy: "From the vibrant energy of Glenwood South to the historic streets of Oakwood, Raleigh isn't just growing—it’s evolving. Our strategy captures the modern skyline and the unique character of local staples to anchor your brand in the Triangle's high-end reality.",
    landmarks: ["The Dillon", "Boylan Bridge", "American Tobacco Campus"],
    hashtags: ["#RaleighRising", "#TriangleTech", "#GlenwoodSouthLife"],
    value_add_custom: "Digital Localization: 10 custom posts, local market research, and trending Raleigh hashtag integration.",
    value_add_growth: "Physical Presence: 20 posts, monthly in-person shoot days in Raleigh, and geo-targeted ad setup for the Triangle market.",
    pricing: {
      custom: "$700–$1,100",
      growth: "$1,400–$1,500"
    },
    case_study: {
      title: "Modern Condos & Vibrant Nightlife",
      image: glenwoodImage,
      location: "Glenwood South, Raleigh, NC",
      challenge: "Translate the physical vibrancy of Glenwood South into a digital experience that drives condo pre-sales.",
      solution: "Hyper-local targeting using \"Digital Localization\" and on-site lifestyle photography capturing the specific \"Live, Work, Play\" atmosphere."
    },
    portfolio: [
       {
        id: 1,
        title: "Raleigh Realty",
        category: "Full Management",
        location: "Glenwood South",
        image: raleighRealtyImage,
        tags: ["Walkable Boutiques", "Vibrant Dining"]
      },
      {
        id: 2,
        title: "Durham Distillery",
        category: "Content Only",
        location: "Downtown Durham",
        image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=800",
        tags: ["Cocktail Culture", "Local Ingredients"]
      }
    ]
  },
  {
    id: "columbus",
    city: "Columbus, OH",
    theme: "Strategic Precision & Stealth Growth",
    neighborhoods: ["Short North", "German Village", "The Peninsula"],
    copy: "Columbus is the quiet giant of the Midwest. We focus on the brick-lined streets of German Village and the rapid tech surge in the Short North to position your business as a leader in a stable, powerful demographic.",
    landmarks: ["The Peninsula", "Schiller Park", "Scioto Mile"],
    hashtags: ["#CbusSmallBiz", "#ShortNorthArts", "#GermanVillageCharm"],
    value_add_custom: "Strategic Localization: 10 custom posts, 200% surge tech-data research for Central Ohio, and Short North/German Village trending hashtag integration.",
    value_add_growth: "Institutional Authority: 20 posts, monthly on-location shoot days at The Peninsula or Scioto Mile, geo-targeted ad setup focusing on Central Ohio investors, and full ad reporting.",
    pricing: {
      custom: "$700–$1,100",
      growth: "$1,400–$1,500+"
    },
    case_study: {
      title: "German Village Heritage",
      image: germanVillageImage,
      location: "German Village, Columbus, OH",
      challenge: "Capturing the prestigious, historic atmosphere of German Village to build institutional authority for a high-end service brand.",
      solution: "Visual storytelling that leverages the iconic brick-lined streets and architecture, positioning the brand as a timeless pillar of the community."
    },
    portfolio: [
       {
        id: 3,
        title: "High Street Hops",
        category: "Full Management",
        location: "Short North",
        image: columbusImage,
        tags: ["Craft Brews", "Art Walk"]
      },
      {
        id: 4,
        title: "Schiller Park Estates",
        category: "Content Only",
        location: "German Village",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800",
        tags: ["Historic Living", "Brick Charm"]
      }
    ]
  },
  {
    id: "moscow",
    city: "Moscow, ID",
    theme: "Community Pillar & Relational Growth",
    neighborhoods: ["Main Street", "The Palouse", "University District"],
    copy: "In Moscow, authority is built on relationships. We lean into the Saturday morning culture of the Farmers Market and the beauty of the Palouse to make your brand a permanent pillar of the community.",
    landmarks: ["BookPeople of Moscow", "Moscow Food Co-op", "Palouse Hills"],
    hashtags: ["#MoscowIdaho", "#PalouseLife", "#ShopLocalMoscow"],
    value_add_custom: "Relational Localization: 10 custom posts, Moscow Farmers Market trend research, and Palouse-specific geotagging strategy.",
    value_add_growth: "Deep Community Engagement: 20 posts, monthly Main St shoots, 1 themed engagement with local businesses (Food Co-op, BookPeople), and geo-targeted ad setup for the University District.",
    pricing: {
      custom: "$700–$1,100",
      growth: "$1,400–$1,500+"
    },
    case_study: {
      title: "Palouse & Main: A Seasonal Evolution",
      image: moscowImage,
      location: "Main Street, Moscow, ID",
      challenge: "Capturing the unique architectural evolution of Main Street against the dramatic backdrop of the seasonal Palouse hills.",
      solution: "A visual campaign highlighting the symbiotic relationship between historic downtown storefronts and the surrounding natural landscape."
    },
    portfolio: [
       {
        id: 5,
        title: "Palouse Provisions",
        category: "Full Management",
        location: "Main Street",
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800",
        tags: ["Farm to Table", "Community"]
      },
      {
        id: 6,
        title: "Vandal Coffee",
        category: "Content Only",
        location: "University District",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
        tags: ["Study Spot", "Morning Ritual"]
      }
    ]
  }
];

export default function Creatives() {
  const [filter, setFilter] = useState("All");
  const [selectedLocationId, setSelectedLocationId] = useState("raleigh");

  const currentLocation = locations.find(l => l.id === selectedLocationId) || locations[0];
  
  const filteredItems = filter === "All" 
    ? currentLocation.portfolio 
    : currentLocation.portfolio.filter(item => item.category === filter);

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
                  {locations.map((loc) => (
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
                      src={item.image} 
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
                  src={currentLocation.case_study.image} 
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