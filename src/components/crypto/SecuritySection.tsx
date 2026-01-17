import { Shield, Lock, Key, Server, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const securityFeatures = [
  "256-bit AES encryption for all data",
  "95% cold storage for digital assets",
  "Multi-signature authorization",
  "Real-time threat monitoring",
  "SOC 2 Type II certified",
  "Insurance coverage up to $500M",
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Enterprise Security
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Your Assets,
              <span className="block text-gradient">Fort Knox Protected</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We take security seriously. Our multi-layered security infrastructure 
              ensures your digital assets are protected around the clock.
            </p>

            {/* Security Features List */}
            <ul className="space-y-4 mb-8">
              {securityFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg">
              Learn More About Security
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="glass-card p-8 glow-primary">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center hover-lift">
                  <Shield className="text-primary mx-auto mb-3" size={40} />
                  <p className="font-display font-semibold text-foreground">Encrypted</p>
                  <p className="text-sm text-muted-foreground">End-to-end</p>
                </div>
                <div className="glass-card p-6 text-center hover-lift">
                  <Lock className="text-primary mx-auto mb-3" size={40} />
                  <p className="font-display font-semibold text-foreground">Cold Storage</p>
                  <p className="text-sm text-muted-foreground">95% assets</p>
                </div>
                <div className="glass-card p-6 text-center hover-lift">
                  <Key className="text-primary mx-auto mb-3" size={40} />
                  <p className="font-display font-semibold text-foreground">Multi-Sig</p>
                  <p className="text-sm text-muted-foreground">Authorization</p>
                </div>
                <div className="glass-card p-6 text-center hover-lift">
                  <Server className="text-primary mx-auto mb-3" size={40} />
                  <p className="font-display font-semibold text-foreground">99.99%</p>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
