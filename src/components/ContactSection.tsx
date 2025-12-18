import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { contactContent } from "@/content";

const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;
const PHONE_DISPLAY = import.meta.env.VITE_PHONE_DISPLAY;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: contactContent.messages.validation.title,
        description: contactContent.messages.validation.description,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          message: formData.message.trim() || undefined,
        },
      });

      if (error) throw error;

      toast({
        title: contactContent.messages.success.title,
        description: contactContent.messages.success.description
      });
      
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast({
        title: contactContent.messages.error.title,
        description: contactContent.messages.error.description,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = formData.name 
      ? contactContent.whatsappMessages.withName.replace("{name}", formData.name)
      : contactContent.whatsappMessages.default;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {contactContent.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {contactContent.sectionSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-background rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-6">{contactContent.form.title}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  name="name"
                  placeholder={contactContent.form.placeholders.name}
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-muted/50 border-border/50 text-right"
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  name="phone"
                  placeholder={contactContent.form.placeholders.phone}
                  type="tel"
                  dir="rtl"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-muted/50 border-border/50 text-right"
                  maxLength={20}
                />
              </div>
              <div>
                <Input
                  name="email"
                  placeholder={contactContent.form.placeholders.email}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-muted/50 border-border/50 text-right"
                  maxLength={255}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={contactContent.form.placeholders.message}
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] bg-muted/50 border-border/50 text-right resize-none"
                  maxLength={1000}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="ml-2 w-5 h-5" />
                {isSubmitting ? contactContent.form.submittingButton : contactContent.form.submitButton}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <Button 
                variant="whatsapp" 
                size="lg" 
                className="w-full"
                onClick={openWhatsApp}
              >
                <MessageCircle className="ml-2 w-5 h-5" />
                {contactContent.form.whatsappButton}
              </Button>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8 text-center">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">{contactContent.info.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {contactContent.info.description}
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href={`tel:+${PHONE_NUMBER}`}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background shadow-soft hover:shadow-hover transition-all group text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contactContent.info.phone.label}</p>
                    <p className="font-semibold text-foreground" dir="ltr">{PHONE_DISPLAY}</p>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background shadow-soft text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contactContent.info.location.label}</p>
                    <p className="font-semibold text-foreground text-sm md:text-base">
                      <span className="block md:inline">{contactContent.info.location.frontal}</span>
                      <span className="hidden md:inline"> | </span>
                      <span className="block md:inline">{contactContent.info.location.online}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
