
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react"; 

export const HeroSection = () => {
  const whatsAppNumber = "966500000000"; 
  const prefilledMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمات غربي براندينج.");
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${prefilledMessage}`;

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] md:min-h-[calc(85vh-4rem)] flex items-center justify-center py-16 md:py-24 bg-background animate-in fade-in zoom-in-95 duration-500"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-sm sm:text-base md:text-lg font-mono text-primary mb-4 tracking-wider">
          مرحباً بك، أنا غربي.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-foreground">
          نبني تجارب رقمية فريدة لعلامتك التجارية.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          متخصصون في تصميم الشعارات، بناء المواقع الاحترافية، وتطوير الهويات البصرية التي تترك انطباعًا دائمًا. دعنا نساعدك في التألق.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-8 sm:px-10 py-5 sm:py-6 text-lg sm:text-xl font-semibold shadow-lg transition-transform transform hover:scale-105 group"
          asChild
        >
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            ابدأ مشروعك معنا
            <ArrowLeft className="mr-2 h-5 w-5 sm:h-6 sm:w-6 rtl:ml-2 rtl:mr-0 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
};
