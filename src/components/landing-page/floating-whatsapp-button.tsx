import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react"; 

export const FloatingWhatsAppButton = () => {
  const whatsAppNumber = "966500000000";
  const prefilledMessage = encodeURIComponent("مرحباً، لدي استفسار بخصوص خدمات غربي براندينج.");
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${prefilledMessage}`;

  return (
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-50 group"
    >
      <Button
        size="icon"
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-16 w-16 shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-primary/50"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircleMore className="h-8 w-8" />
      </Button>
    </a>
  );
};
