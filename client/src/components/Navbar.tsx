import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold uppercase tracking-tighter hover:text-primary transition-colors">
            NEO-B // AGENCY
          </a>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/"><a className="font-medium hover:underline decoration-2 underline-offset-4">Work</a></Link>
          <Link href="/"><a className="font-medium hover:underline decoration-2 underline-offset-4">Services</a></Link>
          <Link href="/"><a className="font-medium hover:underline decoration-2 underline-offset-4">About</a></Link>
          
          <Button className="brutal-btn rounded-none h-auto text-base">
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
}