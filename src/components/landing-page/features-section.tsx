
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Laptop2, MessageCircleMore, Contact2, Youtube, BadgeCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "تصميم شعارات مبتكرة",
    description: "نصمم شعارات فريدة تعكس جوهر علامتك التجارية وتميزك عن المنافسين.",
  },
  {
    icon: <Laptop2 className="h-8 w-8 text-primary" />,
    title: "تطوير مواقع ويب عصرية",
    description: "إنشاء مواقع ويب متجاوبة وسريعة الأداء، مع تجربة مستخدم سلسة وجذابة.",
  },
  {
    icon: <MessageCircleMore className="h-8 w-8 text-primary" />,
    title: "استشارات في الهوية البصرية",
    description: "نقدم استشارات متخصصة لبناء هوية بصرية متكاملة تعزز حضورك في السوق.",
  },
  {
    icon: <Contact2 className="h-8 w-8 text-primary" />,
    title: "تصميم بطاقات عمل رقمية",
    description: "بطاقات تعريف إلكترونية احترافية تعكس علامتك وتسهل التواصل.",
  },
  {
    icon: <Youtube className="h-8 w-8 text-primary" />,
    title: "محتوى مرئي جذاب",
    description: "إنشاء محتوى مرئي إبداعي، من صور وفيديوهات، لتعزيز تفاعل جمهورك.",
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "التزام بالجودة والمواعيد",
    description: "نلتزم بتقديم أعلى مستويات الجودة مع احترام دقيق للمواعيد المتفق عليها.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
            <Zap className="h-7 w-7 text-primary" />
            خدماتنا الأساسية
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            نقدم حلولاً متكاملة لمساعدتك في بناء وتنمية علامتك التجارية الرقمية.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden group relative hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-primary bg-primary/10 p-3 rounded-md">
                     {feature.icon}
                  </div>
                  <CardTitle className="mt-1 text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow relative z-10">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
              {/* Shine effect overlay */}
              <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
                           pointer-events-none
                           bg-[length:200%_100%]
                           bg-gradient-to-r from-transparent via-white/10 to-transparent
                           group-hover:animate-shimmer"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
