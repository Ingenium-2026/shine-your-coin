import { useState, useEffect } from "react";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "./ui/resizable-navbar";
interface SentiraNavbarProps {
  currentScreen: 'dashboard' | 'incidents';
  onNavigateToDashboard: () => void;
  onNavigateToIncidents: () => void;
}
export function SentiraNavbar({
  currentScreen,
  onNavigateToDashboard,
  onNavigateToIncidents
}: SentiraNavbarProps) {
  const [time, setTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const navItems = [{
    name: "Dashboard",
    link: "#dashboard"
  }, {
    name: "Incidents",
    link: "#incidents"
  }];
  const handleNavClick = (link: string) => {
    setIsMobileMenuOpen(false);
    if (link === "#dashboard") {
      onNavigateToDashboard();
    } else if (link === "#incidents") {
      onNavigateToIncidents();
    }
  };
  return <Navbar className="z-50">
      {/* Desktop Navigation */}
      <NavBody className="bg-card/80 dark:bg-card/80 backdrop-blur-sm border-b border-border">
        {/* Logo */}
        <a href="#" onClick={e => {
        e.preventDefault();
        onNavigateToDashboard();
      }} className="relative z-20 flex flex-col text-left">
          <span className="text-xl font-semibold text-white">Sentira</span>
          <span className="text-xs text-neutral-400">Cyber Resilience Platform</span>
        </a>

        {/* Nav Items */}
        <NavItems items={navItems} onItemClick={() => {}} className="text-neutral-300" />

        {/* Right side status */}
        <div className="flex items-center gap-6 z-20">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-neutral-300">Connected</span>
          </div>
          <div className="text-sm text-neutral-300 font-mono">
            {time.toLocaleTimeString()}
          </div>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="bg-card/80 dark:bg-card/80 backdrop-blur-sm border-b border-border">
        <MobileNavHeader>
          <a href="#" onClick={e => {
          e.preventDefault();
          onNavigateToDashboard();
        }} className="relative z-20 flex flex-col">
            <span className="text-lg font-semibold text-white">Sentira</span>
            <span className="text-xs text-neutral-400">
          </span>
          </a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-neutral-400">
                {time.toLocaleTimeString()}
              </span>
            </div>
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => <a key={`mobile-link-${idx}`} href={item.link} onClick={e => {
          e.preventDefault();
          handleNavClick(item.link);
        }} className={`relative py-2 text-neutral-300 hover:text-white transition-colors ${item.link === "#dashboard" && currentScreen === "dashboard" || item.link === "#incidents" && currentScreen === "incidents" ? "text-white font-medium" : ""}`}>
              {item.name}
            </a>)}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>;
}