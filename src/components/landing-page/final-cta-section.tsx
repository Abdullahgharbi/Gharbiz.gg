
import { MessageCircle } from "lucide-react";
import { EmailContactForm } from "./email-contact-form";

export const FinalCTASection = () => {
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
        <EmailContactForm />
      </div>
    </section>
  );
};
