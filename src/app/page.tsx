
import { HeroSection } from "@/components/landing-page/hero-section";
import { FeaturesSection } from "@/components/landing-page/features-section";
import { PricingSection } from "@/components/landing-page/pricing-section";
import { TestimonialsSection } from "@/components/landing-page/testimonials-section";
import { FinalCTASection } from "@/components/landing-page/final-cta-section";
import { FloatingWhatsAppButton } from "@/components/landing-page/floating-whatsapp-button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GharbiBrandingPage() {
  const navLinks = [
    { href: "#features", label: "خدماتنا" },
    { href: "#pricing", label: "الباقات" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#final-cta", label: "تواصل معنا" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-2xl font-bold text-primary">Gharbi</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Placeholder for mobile menu trigger if needed later */}
          </div>
        </div>
      </header>
      
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
        <div className="container mx-auto px-4">
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
