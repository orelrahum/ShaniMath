import { Star, Quote } from "lucide-react";
import { testimonialsContent } from "@/content";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {testimonialsContent.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {testimonialsContent.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonialsContent.items.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 relative text-center"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
