import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export const FinalCTASection = () => {
  const whatsAppNumber = "966500000000"; // Replace with actual WhatsApp number
  const prefilledMessage = encodeURIComponent("مرحباً، أرغب في حجز عرض تصميم الشعار والموقع قبل انتهاء الفرصة!");
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${prefilledMessage}`;

  return (
    <section id="final-cta" className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <AlertTriangle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          لا تفوتي الفرصة! العرض على وشك الانتهاء!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          تبقى <span className="font-bold text-primary">3 مقاعد فقط</span> هذا الأسبوع! احجزي مكانك الآن قبل نفاد العرض وانطلقي بعلامتك التجارية نحو النجاح.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
          asChild
        >
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            احجزي مكانك فوراً
            <ArrowLeft className="mr-2 h-6 w-6 rtl:ml-2 rtl:mr-0" />
          </a>
        </Button>
      </div>
    </section>
  );
};
