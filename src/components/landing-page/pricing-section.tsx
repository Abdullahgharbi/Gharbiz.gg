
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";

const pricingPackages = [
  {
    name: "باقة الأساس",
    price: "$399",
    originalPrice: "$499",
    features: [
      "تصميم شعار (مفهومين)",
      "صفحة هبوط بسيطة",
      "تصميم متجاوب",
      "ربط واتساب",
    ],
    ctaText: "ابدأ الآن",
    highlight: false,
  },
  {
    name: "باقة النمو",
    price: "$699",
    originalPrice: "$899",
    features: [
      "تصميم شعار (3 مفاهيم)",
      "موقع إلكتروني (حتى 5 صفحات)",
      "تصميم متجاوب",
      "ربط واتساب",
      "بطاقة عمل رقمية",
      "فيديو تدريبي",
    ],
    ctaText: "اختر هذه الباقة",
    highlight: true,
  },
  {
    name: "الباقة المتكاملة",
    price: "$999",
    originalPrice: "$1299",
    features: [
      "كل ما في باقة النمو",
      "كتابة محتوى أساسي",
      "دعم فني (شهر)",
      "تحسينات SEO أولية",
    ],
    ctaText: "انطلق بقوة",
    highlight: false,
  },
];

export const PricingSection = () => {
  const whatsAppNumber = "966500000000";
  const getWhatsAppLink = (packageName: string) => {
    const message = encodeURIComponent(`مرحباً، أرغب في الاستفسار عن ${packageName} من غربي براندينج.`);
    return `https://wa.me/${whatsAppNumber}?text=${message}`;
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">الباقات والأسعار</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            اختر الباقة التي تناسب احتياجاتك وميزانيتك للانطلاق بعلامتك التجارية.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`flex flex-col rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${pkg.highlight ? 'border-2 border-primary bg-card shadow-2xl scale-100 md:scale-105' : 'bg-card shadow-lg hover:shadow-xl hover:-translate-y-1'}`}
            >
              {pkg.highlight && (
                <div className="bg-primary text-primary-foreground py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-1 tracking-wider uppercase">
                  <Star className="h-4 w-4" /> الأكثر شيوعًا
                </div>
              )}
              <CardHeader className="p-6 text-center">
                <CardTitle className={`text-xl font-semibold mb-2 ${pkg.highlight ? 'text-primary' : 'text-foreground'}`}>{pkg.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{pkg.price}</span>
                  {pkg.originalPrice && <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>}
                </div>
                <CardDescription className="text-xs text-muted-foreground mt-1">لكل مشروع</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-right">
                      <CheckCircle2 className="h-5 w-5 text-primary ml-2 rtl:mr-2 rtl:ml-0 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Button 
                  size="lg" 
                  className={`w-full rounded-md text-base font-semibold transition-transform transform hover:scale-105 ${pkg.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}
                  asChild
                >
                  <a href={getWhatsAppLink(pkg.name)} target="_blank" rel="noopener noreferrer">
                    {pkg.ctaText}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-muted-foreground">
          جميع الأسعار بالدولار الأمريكي. لتخصيص باقة، <a href={getWhatsAppLink("باقة مخصصة")} className="text-primary hover:underline">تواصل معنا</a>.
        </p>
      </div>
    </section>
  );
};
