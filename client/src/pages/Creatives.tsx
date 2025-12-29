import { Check, MapPin, Camera, TrendingUp, Smartphone, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import glenwoodImage from "@assets/generated_images/glenwood_south_raleigh_modern_nightlife_street_scene.png";
import raleighRealtyImage from "@assets/generated_images/raleigh_glenwood_south_boutique_shops_and_outdoor_dining.png";
import { useState } from "react";

const portfolioItems = [
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
  },
  {
    id: 3,
    title: "Apex Coffee Co.",
    category: "Full Management",
    location: "Apex",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    tags: ["Morning Brew", "Community Hub"]
  },
  {
    id: 4,
    title: "Cary Boutique",
    category: "Content Only",
    location: "Cary",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Summer Collection", "Shop Local"]
  }
];

export default function Creatives() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-secondary/20 border-b border-border">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <MapPin className="w-4 h-4" />
              RALEIGH / DURHAM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              LNL <span className="tech-gradient-text">Creatives</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hyper-local content strategies designed to dominate the Triangle market. 
              From digital localization to physical brand presence.
            </p>
          </div>
        </section>

        {/* Local Authority Portfolio */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Local Authority Content</h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Showcasing brands that own their local narrative.
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
                <div key={item.id} className="group cursor-pointer">
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
                <div className="text-4xl font-bold mb-4">$700 - $1,100<span className="text-lg text-muted-foreground font-medium">/mo</span></div>
                <p className="text-muted-foreground mb-8">Perfect for establishing a strong digital footprint with hyper-local relevance.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="font-semibold text-primary flex items-center gap-2">
                    <Smartphone className="w-5 h-5" /> Digital Localization
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span><strong>10 Custom Posts</strong> designed for engagement</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span><strong>Local Market Research</strong> to identify trends</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span><strong>Trending Raleigh Hashtag</strong> integration</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Content Calendar & Scheduling</span>
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
                <div className="text-4xl font-bold mb-4">$1,400 - $1,500<span className="text-lg text-muted-foreground font-medium">/mo</span></div>
                <p className="text-muted-foreground mb-8">Complete market domination with physical presence and targeted advertising.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="font-semibold text-primary flex items-center gap-2">
                    <Camera className="w-5 h-5" /> Physical Presence
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span><strong>20 High-Fidelity Posts</strong> per month</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span><strong>Monthly In-Person Shoot Days</strong> in Raleigh</span>
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
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3 transition-transform group-hover:rotate-6"></div>
                <img 
                  src={glenwoodImage} 
                  alt="Glenwood South Raleigh Nightlife" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-white font-bold text-lg">Glenwood South</div>
                  <div className="text-white/80 text-sm">Raleigh, NC</div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
                  <TrendingUp className="w-4 h-4" /> Case Study
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Modern Condos & Vibrant Nightlife</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  We partnered with a luxury developer in the Glenwood South district to capture the energy of Raleigh's premier nightlife destination.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <h4 className="font-bold mb-1">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">Translate the physical vibrancy of Glenwood South into a digital experience that drives condo pre-sales.</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <h4 className="font-bold mb-1">Our Solution</h4>
                    <p className="text-sm text-muted-foreground">Hyper-local targeting using "Digital Localization" and on-site lifestyle photography capturing the specific "Live, Work, Play" atmosphere.</p>
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