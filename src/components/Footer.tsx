import { Calculator } from "lucide-react";
import { footerContent } from "@/content";

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">{footerContent.brandName}</span>
          </div>

          {/* Quick links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-secondary transition-colors">{footerContent.navigation.about}</a>
            <a href="#services" className="hover:text-secondary transition-colors">{footerContent.navigation.services}</a>
            <a href="#testimonials" className="hover:text-secondary transition-colors">{footerContent.navigation.testimonials}</a>
            <a href="#contact" className="hover:text-secondary transition-colors">{footerContent.navigation.contact}</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
