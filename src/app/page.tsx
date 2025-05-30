import { HeroSection } from "@/components/landing-page/hero-section";
import { FeaturesSection } from "@/components/landing-page/features-section";
import { PricingSection } from "@/components/landing-page/pricing-section";
import { TestimonialsSection } from "@/components/landing-page/testimonials-section";
import { FinalCTASection } from "@/components/landing-page/final-cta-section";
import { FloatingWhatsAppButton } from "@/components/landing-page/floating-whatsapp-button";
import { Separator } from "@/components/ui/separator";

export default function ZahraBrandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <header className="container mx-auto py-6 px-4 text-center md:text-right">
        <h1 className="text-3xl font-bold text-primary">زهرة براندينج</h1>
        <p className="text-sm text-muted-foreground">نصنع الجمال لعلامتكِ التجارية</p>
      </header>
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <Separator className="my-0 h-px bg-border/50" />
        <PricingSection />
        <Separator className="my-0 h-px bg-border/50" />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      
      <FloatingWhatsAppButton />
      
      <footer className="py-8 bg-gray-800 text-gray-300 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} زهرة براندينج. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs mt-1">
            تصميم وتطوير بحب <span role="img" aria-label="heart">💖</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
