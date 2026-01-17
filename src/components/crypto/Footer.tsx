import { Twitter, Github, Linkedin, MessageCircle } from "lucide-react";

const footerLinks = {
  Products: ["Spot Trading", "Futures", "Staking", "Earn", "NFT Marketplace"],
  Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
  Resources: ["Help Center", "API Docs", "Fees", "Status", "Security"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Compliance"],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Discord" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">NexaCrypto</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              The most trusted platform for trading digital assets. Trade with confidence.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 NexaCrypto. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              🔒 Secured by industry-leading encryption
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
