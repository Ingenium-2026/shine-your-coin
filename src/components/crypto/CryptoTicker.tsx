import { TrendingUp, TrendingDown } from "lucide-react";

const cryptoData = [
  { symbol: "BTC", name: "Bitcoin", price: "67,432.50", change: "+2.45", positive: true, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: "3,521.80", change: "+1.82", positive: true, icon: "Ξ" },
  { symbol: "SOL", name: "Solana", price: "142.35", change: "-0.54", positive: false, icon: "◎" },
  { symbol: "XRP", name: "Ripple", price: "0.5234", change: "+3.21", positive: true, icon: "✕" },
  { symbol: "ADA", name: "Cardano", price: "0.4521", change: "+0.87", positive: true, icon: "₳" },
  { symbol: "AVAX", name: "Avalanche", price: "35.42", change: "-1.23", positive: false, icon: "▲" },
];

const CryptoTicker = () => {
  return (
    <section className="py-8 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">Live Prices</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cryptoData.map((crypto) => (
            <div
              key={crypto.symbol}
              className="glass-card p-4 hover-lift hover-glow cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {crypto.icon}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{crypto.symbol}</p>
                  <p className="text-xs text-muted-foreground">{crypto.name}</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="font-display font-bold text-lg text-foreground">${crypto.price}</p>
                <div className={`flex items-center gap-1 text-sm ${crypto.positive ? 'text-success' : 'text-destructive'}`}>
                  {crypto.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  <span>{crypto.change}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoTicker;
