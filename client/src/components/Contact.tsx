import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-4xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's talk business.</h2>
              <p className="text-muted-foreground mb-8">
                Ready to transform your digital presence? Schedule a consultation with our strategy team.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@lnlgroup.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">101 Tech Boulevard<br/>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us about your project..." className="min-h-[120px] bg-background/50" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-12">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}