
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react"; // Replaced AlertTriangle with MessageCircle

export const FinalCTASection = () => {
  const whatsAppNumber = "966500000000"; 
  const prefilledMessage = encodeURIComponent("مرحباً فريق غربي براندينج، أود مناقشة مشروع جديد.");
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${prefilledMessage}`;

  return (
    <section id="final-cta" className="py-16 md:py-24 bg-secondary/30 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          هل أنت مستعد للارتقاء بعلامتك التجارية؟
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          دعنا نساعدك في تحقيق رؤيتك. تواصل معنا اليوم لبدء مشروعك القادم وتحقيق أهدافك.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-8 sm:px-10 py-5 sm:py-6 text-lg sm:text-xl font-semibold shadow-lg transition-transform transform hover:scale-105 group"
          asChild
        >
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            تواصل معنا الآن
            <ArrowLeft className="mr-2 h-5 w-5 sm:h-6 sm:w-6 rtl:ml-2 rtl:mr-0 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
};
