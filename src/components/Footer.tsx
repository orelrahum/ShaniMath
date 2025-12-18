import { useState } from "react";
import { Calculator, Accessibility } from "lucide-react";
import { footerContent } from "@/content";

const Footer = () => {
  const [showAccessibility, setShowAccessibility] = useState(false);

  return (
    <footer className="py-10 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <Calculator className="w-5 h-5" aria-hidden="true" />
            </div>
            <span className="font-bold text-lg">{footerContent.brandName}</span>
          </div>

          {/* Quick links */}
          <nav aria-label="ניווט ראשי בתחתית העמוד" className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded">{footerContent.navigation.about}</a>
            <a href="#services" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded">{footerContent.navigation.services}</a>
            <a href="#testimonials" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded">{footerContent.navigation.testimonials}</a>
            <a href="#contact" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded">{footerContent.navigation.contact}</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {footerContent.copyright}
          </p>
        </div>

        {/* Accessibility Statement */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <button
            onClick={() => setShowAccessibility(!showAccessibility)}
            className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded px-2 py-1 mx-auto"
            aria-expanded={showAccessibility}
            aria-controls="accessibility-statement"
          >
            <Accessibility className="w-4 h-4" aria-hidden="true" />
            {footerContent.accessibility.title}
          </button>
          
          {showAccessibility && (
            <div 
              id="accessibility-statement"
              className="mt-4 p-4 bg-primary-foreground/5 rounded-lg text-sm text-primary-foreground/70 max-w-2xl mx-auto text-center leading-relaxed"
              role="region"
              aria-label="הצהרת נגישות"
            >
              {footerContent.accessibility.statement}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
