import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Sparkles, Heart, Target, Zap } from "lucide-react";
import MathDecorations from "./MathDecorations";
import { heroContent } from "@/content";

const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  target: Target,
};

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(heroContent.whatsappMessage)}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <MathDecorations />
      
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Soft gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="animate-fade-in-up max-w-4xl mx-auto text-center">
          
          {/* Main powerful headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
              <span className="block mb-2">{heroContent.headline.line1}</span>
              <span className="text-gradient text-6xl md:text-7xl lg:text-8xl">{heroContent.headline.line2}</span>
            </h1>
          </div>

          {/* Subtitle with personality */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            {heroContent.subtitle.text}
            <span className="text-foreground"> {heroContent.subtitle.highlight}</span>
          </p>

          {/* Unique selling points */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {heroContent.sellingPoints.map((point, index) => {
              const IconComponent = iconMap[point.type as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-soft border border-border/50">
                  <IconComponent className={`w-4 h-4 ${point.type === 'sparkles' ? 'text-secondary' : point.type === 'heart' ? 'text-primary' : 'text-accent'}`} />
                  <span className="text-sm font-medium text-foreground">{point.text}</span>
                </div>
              );
            })}
          </div>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-10 border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {heroContent.trustBadge}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="w-full sm:w-auto text-lg px-10 py-7"
            >
              <Phone className="ml-2 w-5 h-5" />
              {heroContent.buttons.primary}
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={openWhatsApp}
              className="w-full sm:w-auto text-lg px-10 py-7"
            >
              <MessageCircle className="ml-2 w-5 h-5" />
              {heroContent.buttons.whatsapp}
            </Button>
          </div>

          {/* Social proof mini */}
          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {['מ', 'ד', 'ש', 'ר'].map((letter, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground border-2 border-background"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-sm mr-2">{heroContent.socialProof}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
