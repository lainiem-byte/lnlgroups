import ContactForm from "@/components/ContactForm";

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

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}