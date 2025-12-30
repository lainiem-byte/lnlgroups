import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, MapPin, ChevronDown } from "lucide-react";
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

const localHubs = [
  { id: "raleigh", name: "Raleigh-Durham", tagline: "Innovation Hub" },
  { id: "columbus", name: "Columbus", tagline: "Midwest Powerhouse" },
  { id: "moscow", name: "Moscow", tagline: "Palouse Community" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurrentHub = () => {
    const path = location.replace("/", "");
    return localHubs.find(h => h.id === path);
  };

  const currentHub = getCurrentHub();
  const isHubActive = currentHub !== undefined || location === "/creatives";

  const handleHubSelect = (hubId: string) => {
    setLocation(`/${hubId}`);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a className={`text-sm font-medium transition-colors hover:text-lnl-gold ${isActive ? 'text-lnl-gold' : 'text-foreground/80'}`}>
          {children}
        </a>
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-lnl-gold/10 shadow-lg shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold font-display tracking-tight flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-lnl-gold to-amber-600 flex items-center justify-center text-black font-bold shadow-lg shadow-lnl-gold/20 group-hover:shadow-lnl-gold/40 transition-shadow">
              L
            </span>
            <span className="text-white">LNL <span className="text-lnl-gold">GROUP</span></span>
          </a>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          
          {/* Local Hub Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center gap-2 text-sm font-medium transition-all px-4 py-2 rounded-full border ${
                isHubActive 
                  ? 'text-lnl-gold border-lnl-gold/50 bg-lnl-gold/10' 
                  : 'text-foreground/80 border-transparent hover:text-lnl-gold hover:border-lnl-gold/30'
              }`}>
                <MapPin className="w-4 h-4" />
                <span>{currentHub?.name || "Local Hub"}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-56 bg-[#0d0d0d] border-lnl-gold/20 p-2"
            >
              {localHubs.map((hub) => (
                <DropdownMenuItem
                  key={hub.id}
                  onClick={() => handleHubSelect(hub.id)}
                  className={`flex flex-col items-start gap-0.5 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                    currentHub?.id === hub.id 
                      ? 'bg-lnl-gold/15 text-white' 
                      : 'hover:bg-lnl-gold/10 text-foreground/80 hover:text-white'
                  }`}
                >
                  <span className="font-semibold">{hub.name}</span>
                  <span className={`text-xs ${currentHub?.id === hub.id ? 'text-lnl-gold' : 'text-muted-foreground'}`}>
                    {hub.tagline}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          
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

          <Button className="rounded-full px-6 bg-lnl-gold hover:bg-lnl-gold/90 text-black font-semibold shadow-lg shadow-lnl-gold/20 hover:shadow-lnl-gold/30 transition-all">
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
            <SheetContent className="bg-[#0a0a0a] border-lnl-gold/20">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/">
                  <a className="text-lg font-medium text-foreground/80 hover:text-lnl-gold transition-colors">Home</a>
                </Link>
                <Link href="/about">
                  <a className="text-lg font-medium text-foreground/80 hover:text-lnl-gold transition-colors">About</a>
                </Link>
                
                {/* Mobile Local Hub Section */}
                <div className="border-t border-lnl-gold/20 pt-6">
                  <div className="flex items-center gap-2 text-lnl-gold mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wide">Local Hub</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {localHubs.map((hub) => (
                      <button
                        key={hub.id}
                        onClick={() => handleHubSelect(hub.id)}
                        className={`text-left px-4 py-3 rounded-xl transition-all ${
                          currentHub?.id === hub.id
                            ? 'bg-lnl-gold/15 border border-lnl-gold/30'
                            : 'hover:bg-lnl-gold/10'
                        }`}
                      >
                        <div className="font-semibold text-white">{hub.name}</div>
                        <div className={`text-xs ${currentHub?.id === hub.id ? 'text-lnl-gold' : 'text-muted-foreground'}`}>
                          {hub.tagline}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-lnl-gold/20 pt-6">
                  <Link href="/portfolio">
                    <a className="text-lg font-medium text-foreground/80 hover:text-lnl-gold transition-colors block mb-6">Portfolio</a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-lg font-medium text-foreground/80 hover:text-lnl-gold transition-colors block">Contact</a>
                  </Link>
                </div>

                <Button className="w-full rounded-full mt-4 bg-lnl-gold hover:bg-lnl-gold/90 text-black font-semibold">
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
