import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-muted-foreground">Live Trading • 24/7 Market Access</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            The Future of
            <span className="block text-gradient">Crypto Trading</span>
            Starts Here
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trade over 200+ cryptocurrencies with industry-leading security, 
            lightning-fast execution, and the lowest fees in the market.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="group">
              Start Trading Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play size={20} className="mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-6 hover-lift hover-glow">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="text-primary" size={24} />
                <span className="text-3xl font-display font-bold text-foreground">$4.2B+</span>
              </div>
              <p className="text-muted-foreground text-sm">24h Trading Volume</p>
            </div>
            <div className="glass-card p-6 hover-lift hover-glow">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Shield className="text-primary" size={24} />
                <span className="text-3xl font-display font-bold text-foreground">2M+</span>
              </div>
              <p className="text-muted-foreground text-sm">Active Traders</p>
            </div>
            <div className="glass-card p-6 hover-lift hover-glow">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="text-primary" size={24} />
                <span className="text-3xl font-display font-bold text-foreground">0.01%</span>
              </div>
              <p className="text-muted-foreground text-sm">Trading Fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
