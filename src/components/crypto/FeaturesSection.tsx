import { Shield, Zap, BarChart3, Wallet, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance matching engine.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your assets are protected by military-grade encryption and cold storage.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time charts, indicators, and AI-powered market insights.",
  },
  {
    icon: Wallet,
    title: "Multi-Asset Wallet",
    description: "Store, send, and receive 200+ cryptocurrencies in one secure wallet.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere with our mobile apps and 24/7 global support.",
  },
  {
    icon: Lock,
    title: "Full Compliance",
    description: "Fully licensed and regulated in major financial jurisdictions.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient">Serious Traders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to trade crypto like a professional, all in one platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 hover-lift hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
