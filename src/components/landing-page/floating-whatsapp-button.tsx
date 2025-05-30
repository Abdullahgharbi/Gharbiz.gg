import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react"; // Using Lucide as requested, a branded WhatsApp icon would be ideal.

export const FloatingWhatsAppButton = () => {
  const whatsAppNumber = "966500000000"; // Replace with actual WhatsApp number
  const prefilledMessage = encodeURIComponent("مرحباً، لدي استفسار بخصوص خدمات زهرة براندينج.");
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${prefilledMessage}`;

  return (
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-50"
    >
      <Button
        size="icon"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-16 w-16 shadow-xl transition-transform transform hover:scale-110"
      >
        <MessageCircleMore className="h-8 w-8" />
      </Button>
    </a>
  );
};
