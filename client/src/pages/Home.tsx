import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      
      <section className="py-24 border-y-2 border-black bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-8xl font-black mb-8 leading-none">
            DON'T BE BORING.
          </h2>
          <p className="text-xl md:text-3xl font-bold max-w-4xl mx-auto">
            IN A SEA OF SAMENESS, WE ARE THE GLITCH.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}