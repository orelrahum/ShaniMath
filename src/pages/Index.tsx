import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div dir="rtl" className="min-h-screen">
      <Helmet>
        <title>שני רחום | מורה פרטית למתמטיקה לכל גיל</title>
        <meta name="description" content="מורה פרטית למתמטיקה עם תואר שני ומעל 5 שנות ניסיון. שיעורים פרונטליים ואונליין לכל הגילאים - יסודי, תיכון, פסיכומטרי ואקדמיה." />
        <meta name="keywords" content="מורה פרטית למתמטיקה, שיעורים פרטיים מתמטיקה, הכנה לבגרות מתמטיקה, פסיכומטרי כמותי" />
        <link rel="canonical" href="https://smartmath.co.il" />
      </Helmet>

      {/* Skip to main content link - נגישות */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        דלג לתוכן הראשי
      </a>

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
