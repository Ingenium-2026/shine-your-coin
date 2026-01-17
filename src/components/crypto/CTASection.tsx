import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles className="text-primary" size={18} />
            <span className="text-sm text-muted-foreground">Get $50 bonus on your first trade</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Start Your
            <span className="block text-gradient">Crypto Journey?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join over 2 million traders who trust NexaCrypto for their digital asset trading. 
            Create your account in minutes and start trading today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Create Free Account
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">App Store Rating</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-foreground">190+</p>
              <p className="text-sm text-muted-foreground">Countries Supported</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
