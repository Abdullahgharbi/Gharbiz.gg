
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";

const pricingPackages = [
  {
    name: "باقة الانطلاقة",
    price: "$399",
    originalPrice: "$499",
    features: [
      "تصميم شعار احترافي (مفهومين)",
      "صفحة تعريفية بسيطة (Landing Page)",
      "تصميم متجاوب",
      "ربط واتساب",
    ],
    ctaText: "ابدئي الآن",
    highlight: false,
  },
  {
    name: "باقة الاحتراف",
    price: "$699",
    originalPrice: "$899",
    features: [
      "تصميم شعار احترافي (3 مفاهيم)",
      "موقع إلكتروني كامل (حتى 5 صفحات)",
      "تصميم متجاوب وفاخر",
      "ربط واتساب",
      "بطاقة عمل رقمية",
      "فيديو تدريبي",
    ],
    ctaText: "الخيار الأمثل",
    highlight: true,
  },
  {
    name: "باقة VIP",
    price: "$999",
    originalPrice: "$1299",
    features: [
      "كل ما في باقة الاحتراف",
      "كتابة محتوى أساسي للموقع",
      "دعم فني لمدة شهر",
      "تحسينات SEO أساسية",
      "استشارة تسويقية",
    ],
    ctaText: "تميزي معنا",
    highlight: false,
  },
];

export const PricingSection = () => {
  const whatsAppNumber = "966500000000"; // Replace with actual WhatsApp number
  const getWhatsAppLink = (packageName: string) => {
    const message = encodeURIComponent(`مرحباً، أرغب في الاستفسار عن ${packageName}.`);
    return `https://wa.me/${whatsAppNumber}?text=${message}`;
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">باقات تناسب طموحك</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            اختاري الباقة المثالية التي تلبي احتياجات علامتك التجارية وتساعدك على التألق.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`flex flex-col shadow-lg rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${pkg.highlight ? 'border-2 border-primary scale-100 md:scale-105 bg-background' : 'bg-card hover:shadow-xl hover:scale-102'}`}
            >
              {pkg.highlight && (
                <div className="bg-primary text-primary-foreground py-2 px-4 text-sm font-semibold text-center flex items-center justify-center gap-1">
                  <Star className="h-4 w-4" /> الأكثر طلباً
                </div>
              )}
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-2xl font-bold text-primary mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-4xl font-extrabold text-foreground mb-1">{pkg.price}</CardDescription>
                {pkg.originalPrice && <p className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</p>}
                <p className="text-xs text-muted-foreground mt-1">شامل الضريبة</p>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-right">
                      <CheckCircle2 className="h-5 w-5 text-green-500 ml-2 rtl:mr-2 rtl:ml-0 shrink-0 mt-1" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Button 
                  size="lg" 
                  className={`w-full rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 ${pkg.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}
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
        <p className="text-center mt-8 text-sm text-muted-foreground">
          جميع الباقات تشمل تسليم المشروع خلال 10 أيام عمل. الأسعار بالدولار الأمريكي.
        </p>
      </div>
    </section>
  );
};
