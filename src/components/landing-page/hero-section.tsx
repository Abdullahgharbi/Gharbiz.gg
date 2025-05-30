
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlayCircle } from "lucide-react"; 
import Image from "next/image";

export const HeroSection = () => {
  const whatsAppNumber = "966500000000"; 
  const prefilledMessage = encodeURIComponent("مرحباً، أرغب في حجز عرض تصميم الشعار والموقع خلال 10 أيام.");
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${prefilledMessage}`;

  return (
    <section id="hero" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/30 animate-in fade-in zoom-in-95 duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span role="img" aria-label="sparkles" className="text-primary">✨</span> علامتك التجارية لا تحتاج أن تكون مشهورة لتتألق!
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            صممي شعارًا أنيقًا وموقعًا احترافيًا يبني الثقة مع عملائك – في 10 أيام فقط!
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 sm:px-10 py-5 sm:py-6 text-lg sm:text-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
            asChild
          >
            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
              احجزي الآن
              <ArrowLeft className="mr-2 h-5 w-5 sm:h-6 sm:w-6 rtl:ml-2 rtl:mr-0" />
            </a>
          </Button>
        </div>
        <div className="md:w-1/2 lg:w-2/5 flex items-center justify-center w-full mt-8 md:mt-0">
          <div className="relative group w-full max-w-md aspect-[16/10] rounded-lg shadow-xl overflow-hidden bg-secondary cursor-pointer">
            <Image 
              src="https://placehold.co/600x375.png" 
              alt="Video Thumbnail showcasing branding services" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="brand presentation"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
