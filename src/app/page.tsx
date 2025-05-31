
import { HeroSection } from "@/components/landing-page/hero-section";
import { FeaturesSection } from "@/components/landing-page/features-section";
import { PricingSection } from "@/components/landing-page/pricing-section";
import { TestimonialsSection } from "@/components/landing-page/testimonials-section";
import { FinalCTASection } from "@/components/landing-page/final-cta-section";
import { FloatingWhatsAppButton } from "@/components/landing-page/floating-whatsapp-button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function GharbiBrandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      
      <main>
        <HeroSection />
        <div className="animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-100">
          <FeaturesSection />
        </div>
        <Separator className="my-0 h-px bg-border/20" />
        <div className="animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-200">
          <PricingSection />
        </div>
        <Separator className="my-0 h-px bg-border/20" />
        <div className="animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-300">
          <TestimonialsSection />
        </div>
        <div className="animate-in fade-in-0 zoom-in-90 duration-700 delay-400">
         <FinalCTASection />
        </div>
      </main>
      
      <FloatingWhatsAppButton />
      
      <footer className="py-8 border-t border-border/20 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Gharbi Branding Logo Small"
              width={60}
              height={60}
              data-ai-hint="monogram logo"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gharbi. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs mt-1 text-muted-foreground/70">
            تصميم وتطوير بحب وهوية عصرية ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
