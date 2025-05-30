import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react"; // For RTL, ArrowLeft points to the direction of reading flow

export const HeroSection = () => {
  const whatsAppNumber = "966500000000"; // Replace with actual WhatsApp number
  const prefilledMessage = encodeURIComponent("مرحباً، أرغب في حجز عرض تصميم الشعار والموقع خلال 10 أيام.");
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${prefilledMessage}`;

  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/30 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span role="img" aria-label="sparkles" className="text-primary">✨</span> علامتك التجارية لا تحتاج أن تكون مشهورة لتتألق!
        </h1>
        <p className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          صممي شعارًا أنيقًا وموقعًا احترافيًا يبني الثقة مع عملائك – في 10 أيام فقط!
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
          asChild
        >
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            احجزي الآن
            <ArrowLeft className="mr-2 h-6 w-6 rtl:ml-2 rtl:mr-0" />
          </a>
        </Button>
      </div>
    </section>
  );
};
