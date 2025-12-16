import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=היי%20שני,%20אשמח%20לשמוע%20פרטים%20על%20שיעורים%20פרטיים`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute left-full mr-3 px-3 py-2 bg-foreground text-primary-foreground text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        שלחו הודעה בוואטסאפ
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </button>
  );
};

export default FloatingWhatsApp;
