import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Laptop2, MessageCircleMore, Contact2, Youtube, BadgeCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "3 نماذج شعار للاختيار",
    description: "نقدم لك ثلاثة مفاهيم تصميمية فريدة لشعارك، تعكس رؤيتك وهوية علامتك التجارية.",
  },
  {
    icon: <Laptop2 className="h-10 w-10 text-primary" />,
    title: "موقع إلكتروني جذاب ومتجاوب",
    description: "تصميم موقع ويب عصري يتكيف مع جميع الشاشات (كمبيوتر، جوال، تابلت) لتجربة مستخدم مثالية.",
  },
  {
    icon: <MessageCircleMore className="h-10 w-10 text-primary" />,
    title: "ربط مباشر مع واتساب",
    description: "تسهيل التواصل الفوري مع عملائك عبر دمج أيقونة واتساب مباشرة في موقعك.",
  },
  {
    icon: <Contact2 className="h-10 w-10 text-primary" />,
    title: "بطاقة عمل رقمية",
    description: "بطاقة تعريف إلكترونية أنيقة وسهلة المشاركة لتعزيز شبكة علاقاتك المهنية.",
  },
  {
    icon: <Youtube className="h-10 w-10 text-primary" />,
    title: "فيديو تدريبي لإدارة الموقع",
    description: "شرح مبسط بالفيديو يمكنك من إدارة وتحديث محتوى موقعك بسهولة تامة.",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "ضمان استرداد المبلغ 💯",
    description: "نضمن رضاك التام عن الخدمة، مع إمكانية استرداد المبلغ خلال 30 يومًا إذا لم تكوني راضية.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            ما الذي ستحصلين عليه؟
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            نقدم لك باقة متكاملة من الخدمات الاحترافية لإطلاق علامتك التجارية بقوة وثقة.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden bg-card">
              <CardHeader className="flex flex-col items-center text-center p-6 bg-accent/30">
                {feature.icon}
                <CardTitle className="mt-4 text-xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
