import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquareQuote } from "lucide-react";
import { AITestimonialGenerator } from "./ai-testimonial-generator";

const staticTestimonials = [
  {
    quote: "التصميم أنيق وراقي – حسيت عندي براند عالمي!",
    author: "نجلاء",
    avatar: "https://placehold.co/100x100/F8E1EA/C9A44C?text=N",
    dataAiHint: "woman portrait"
  },
  {
    quote: "صار عندي موقع يخليني أبيع بثقة على واتساب!",
    author: "رهف",
    avatar: "https://placehold.co/100x100/F8E1EA/C9A44C?text=R",
    dataAiHint: "woman smiling"
  },
  {
    quote: "التعامل كان احترافي وسريع، والموقع طلع أحلى من ما توقعت. شكرًا زهرة براندينج!",
    author: "سارة",
    avatar: "https://placehold.co/100x100/F8E1EA/C9A44C?text=S",
    dataAiHint: "professional woman"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <MessageSquareQuote className="h-8 w-8 text-primary" />
            شهادات عميلاتنا السعيدات
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            آراء حقيقية من عميلاتنا اللاتي وثقن بنا لتحقيق أحلامهن التجارية.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {staticTestimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg rounded-xl overflow-hidden bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <img 
                  src={testimonial.avatar} 
                  alt={`صورة ${testimonial.author}`} 
                  data-ai-hint={testimonial.dataAiHint}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent object-cover"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-foreground/80 italic text-lg leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-semibold text-primary">– {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 pt-10 border-t border-border">
          <AITestimonialGenerator />
        </div>
      </div>
    </section>
  );
};
