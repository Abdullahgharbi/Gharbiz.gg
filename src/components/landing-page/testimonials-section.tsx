
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquareQuote } from "lucide-react";
// Removed import: import { AITestimonialGenerator } from "./ai-testimonial-generator";
import Image from "next/image";

const staticTestimonials = [
  {
    quote: "التصميم أنيق وراقي – حسيت عندي براند عالمي!",
    author: "نجلاء",
    avatar: "https://placehold.co/100x100.png", 
    dataAiHint: "woman portrait"
  },
  {
    quote: "صار عندي موقع يخليني أبيع بثقة على واتساب!",
    author: "رهف",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "woman smiling"
  },
  {
    quote: "التعامل كان احترافي وسريع، والموقع طلع أحلى من ما توقعت. شكرًا زهرة براندينج!",
    author: "سارة",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "business woman" 
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {staticTestimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg rounded-xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="relative w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent overflow-hidden shadow-md">
                  <Image 
                    src={testimonial.avatar} 
                    alt={`صورة ${testimonial.author}`} 
                    data-ai-hint={testimonial.dataAiHint}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
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
        
        {/* Removed the AITestimonialGenerator section below 
        <div className="mt-16 pt-10 border-t border-border">
          <AITestimonialGenerator />
        </div>
        */}
      </div>
    </section>
  );
};

