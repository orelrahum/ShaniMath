import { MessageSquare, Calendar, BookCheck, TrendingUp, LucideIcon } from "lucide-react";
import { processContent } from "@/content";

const iconMap: Record<string, LucideIcon> = {
  messageSquare: MessageSquare,
  calendar: Calendar,
  bookCheck: BookCheck,
  trendingUp: TrendingUp,
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {processContent.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {processContent.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processContent.steps.map((step, index) => {
            const IconComponent = iconMap[step.iconType];
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < processContent.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-l from-primary/20 to-transparent -z-10" />
                )}
                
                <div className="group text-center">
                  {/* Step number and icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-full bg-background shadow-card flex items-center justify-center group-hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
