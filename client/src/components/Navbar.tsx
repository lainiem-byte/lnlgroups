import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, MapPin, ChevronDown, Camera, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useActiveLocation } from "@/context/LocationContext";

const localHubs = [
  { id: "raleigh" as const, name: "Raleigh-Durham", tagline: "Innovation Hub" },
  { id: "columbus" as const, name: "Columbus", tagline: "Midwest Powerhouse" },
  { id: "moscow" as const, name: "Moscow", tagline: "Palouse Community" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const { theme, setTheme } = useTheme();
  const { activeLocation, setActiveLocation } = useActiveLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentHub = localHubs.find(h => h.id === activeLocation);
  const isOnHubPage = ["/raleigh", "/columbus", "/moscow", "/creatives"].includes(location);

  const handleHubSelect = (hubId: "raleigh" | "columbus" | "moscow") => {
    setActiveLocation(hubId);
    if (!isOnHubPage) {
      setLocation(`/${hubId}`);
    }
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;
    return (
      <Link href={href} className={`text-sm font-medium transition-colors hover:text-lnl-gold ${isActive ? 'text-lnl-gold' : 'text-foreground/80'}`}>
        {children}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#1A1A1D]/95 backdrop-blur-xl border-b border-lnl-gold/10 shadow-lg shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-display tracking-tight flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-xl bg-lnl-gold flex items-center justify-center text-black font-bold shadow-lg shadow-lnl-gold/20 group-hover:shadow-lnl-gold/40 transition-shadow">
            L
          </span>
          <span className="text-white">LNL</span> <span className="text-lnl-gold">GROUP</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          
          {/* Our Hubs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center gap-2 text-sm font-medium transition-all px-4 py-2 rounded-full border ${
                isOnHubPage 
                  ? 'text-lnl-gold border-lnl-gold/50 bg-lnl-gold/10' 
                  : 'text-foreground/80 border-transparent hover:text-lnl-gold hover:border-lnl-gold/30'
              }`}>
                <MapPin className="w-4 h-4" />
                <span>{isOnHubPage ? currentHub?.name : "Our Hubs"}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-56 bg-[#242428] border-lnl-gold/20 p-2"
            >
              {localHubs.map((hub) => (
                <DropdownMenuItem
                  key={hub.id}
                  onClick={() => handleHubSelect(hub.id)}
                  className={`flex flex-col items-start gap-0.5 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                    activeLocation === hub.id 
                      ? 'bg-lnl-gold/15 text-white' 
                      : 'hover:bg-lnl-gold/10 text-foreground/80 hover:text-white'
                  }`}
                >
                  <span className="font-semibold">{hub.name}</span>
                  <span className={`text-xs ${activeLocation === hub.id ? 'text-lnl-gold' : 'text-muted-foreground'}`}>
                    {hub.tagline}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Portfolio Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center gap-2 text-sm font-medium transition-all px-4 py-2 rounded-full border ${
                location.startsWith('/portfolio') 
                  ? 'text-lnl-gold border-lnl-gold/50 bg-lnl-gold/10' 
                  : 'text-foreground/80 border-transparent hover:text-lnl-gold hover:border-lnl-gold/30'
              }`}>
                <span>Portfolio</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-56 bg-[#242428] border-lnl-gold/20 p-2"
            >
              <DropdownMenuItem
                onClick={() => setLocation('/portfolio/creatives')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                  location === '/portfolio/creatives' 
                    ? 'bg-[#008080]/15 text-white' 
                    : 'hover:bg-[#008080]/10 text-foreground/80 hover:text-white'
                }`}
              >
                <Camera className="w-4 h-4 text-[#008080]" />
                <div>
                  <span className="font-semibold">Creative Work</span>
                  <p className="text-xs text-muted-foreground">Brand & Content</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLocation('/portfolio/automations')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                  location === '/portfolio/automations' 
                    ? 'bg-[#2E5BFF]/15 text-white' 
                    : 'hover:bg-[#2E5BFF]/10 text-foreground/80 hover:text-white'
                }`}
              >
                <Zap className="w-4 h-4 text-[#2E5BFF]" />
                <div>
                  <span className="font-semibold">Automation Work</span>
                  <p className="text-xs text-muted-foreground">AI & Workflows</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-medium transition-colors hover:text-lnl-gold text-foreground/80"
          >
            Contact
          </button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-lnl-gold/10"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button 
            className="rounded-full px-6 bg-lnl-gold hover:bg-lnl-gold/90 text-black font-semibold shadow-lg shadow-lnl-gold/20 hover:shadow-lnl-gold/30 transition-all"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-lnl-gold/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#1A1A1D] border-lnl-gold/20">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-medium text-foreground/80 hover:text-lnl-gold transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium text-foreground/80 hover:text-lnl-gold transition-colors">
                  About
                </Link>
                
                {/* Mobile Our Hubs Section */}
                <div className="border-t border-lnl-gold/20 pt-6">
                  <div className="flex items-center gap-2 text-lnl-gold mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wide">Our Hubs</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {localHubs.map((hub) => (
                      <button
                        key={hub.id}
                        onClick={() => handleHubSelect(hub.id)}
                        className={`text-left px-4 py-3 rounded-xl transition-all ${
                          activeLocation === hub.id
                            ? 'bg-lnl-gold/15 border border-lnl-gold/30'
                            : 'hover:bg-lnl-gold/10'
                        }`}
                      >
                        <div className="font-semibold text-white">{hub.name}</div>
                        <div className={`text-xs ${activeLocation === hub.id ? 'text-lnl-gold' : 'text-muted-foreground'}`}>
                          {hub.tagline}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-lnl-gold/20 pt-6">
                  <div className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">Portfolio</div>
                  <Link href="/portfolio/creatives" className="flex items-center gap-3 text-lg font-medium text-foreground/80 hover:text-[#008080] transition-colors mb-4">
                    <Camera className="w-5 h-5 text-[#008080]" />
                    Creative Work
                  </Link>
                  <Link href="/portfolio/automations" className="flex items-center gap-3 text-lg font-medium text-foreground/80 hover:text-[#2E5BFF] transition-colors mb-6">
                    <Zap className="w-5 h-5 text-[#2E5BFF]" />
                    Automation Work
                  </Link>
                  <button 
                    onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-lg font-medium text-foreground/80 hover:text-lnl-gold transition-colors block text-left"
                  >
                    Contact
                  </button>
                </div>

                <Button 
                  className="w-full rounded-full mt-4 bg-lnl-gold hover:bg-lnl-gold/90 text-black font-semibold"
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
