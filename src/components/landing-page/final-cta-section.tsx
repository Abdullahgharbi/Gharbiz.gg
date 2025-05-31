
import { Card, CardContent } from "@/components/ui/card";
import { Quote, MessageSquareText } from "lucide-react";

const marketingQuotes = [
  {
    text: "التسويق هو فن جعل الناس يشترون ما لا يحتاجونه بأموال لا يملكونها، ولكن العلامة التجارية هي فن جعلهم يشعرون بالرضا حيال ذلك.",
    author: "مجهول (بتصرف)",
  },
  {
    text: "علامتك التجارية هي ما يقوله الناس عنك عندما لا تكون في الغرفة.",
    author: "جيف بيزوس (مؤسس أمازون)",
  },
  {
    text: "المحتوى هو الملك، ولكن التوزيع هو المملكة.",
    author: "مجهول (في مجال التسويق الرقمي)",
  },
  {
    text: "أفضل تسويق لا يبدو كتسويق.",
    author: "توم فيشبرن",
  },
  {
    text: "لا تبني روابط. ابني علاقات.",
    author: "راند فيشكين",
  }
];

export const FinalCTASection = () => {
  return (
    <section id="quotes-section" className="py-16 md:py-24 bg-secondary/30 text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Quote className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            مقولات ملهمة في التسويق وبناء العلامات التجارية
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            اكتشف رؤى وأفكارًا يمكن أن تحفز استراتيجيتك القادمة.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingQuotes.map((quote, index) => (
            <Card 
              key={index} 
              className={`bg-card shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out rounded-lg group flex flex-col ${
                index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
              } hover:scale-105 animate-in slide-in-from-right-32 duration-700 ease-out fill-mode-backwards`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <blockquote className="text-lg italic text-foreground/90 mb-4 flex-grow">
                  " {quote.text} "
                </blockquote>
                <footer className="text-sm text-primary font-medium mt-auto pt-4 border-t border-border/20">
                  — {quote.author}
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <MessageSquareText className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            هل لديك استفسار أو مشروع؟
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            نحن هنا للمساعدة! يمكنك التواصل معنا مباشرة عبر أيقونة واتساب الموجودة في الركن.
          </p>
        </div>
      </div>
    </section>
  );
};
