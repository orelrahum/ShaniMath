import { GraduationCap, Heart, Target, Clock, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/content";

const iconMap: Record<string, LucideIcon> = {
  graduationCap: GraduationCap,
  heart: Heart,
  target: Target,
  clock: Clock,
};

const AboutSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {aboutContent.sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              {aboutContent.mainText}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold text-foreground">{aboutContent.education.firstDegree}</span> ו<span className="font-semibold text-foreground">{aboutContent.education.secondDegree}</span>.
            </p>
          </div>

          {/* Strengths grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {aboutContent.strengths.map((strength, index) => {
              const IconComponent = iconMap[strength.iconType];
              return (
                <div 
                  key={strength.title}
                  className="group bg-background rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{strength.title}</h3>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              {aboutContent.ctaButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
