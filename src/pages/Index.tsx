import Header from "@/components/crypto/Header";
import HeroSection from "@/components/crypto/HeroSection";
import CryptoTicker from "@/components/crypto/CryptoTicker";
import FeaturesSection from "@/components/crypto/FeaturesSection";
import SecuritySection from "@/components/crypto/SecuritySection";
import CTASection from "@/components/crypto/CTASection";
import Footer from "@/components/crypto/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CryptoTicker />
      <FeaturesSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
