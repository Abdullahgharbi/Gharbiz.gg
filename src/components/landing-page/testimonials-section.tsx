
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquareQuote, Edit3 } from "lucide-react";
import Image from "next/image";
import { TestimonialSubmissionForm } from "./testimonial-submission-form";

const staticTestimonials = [
  {
    quote: "تصميم الشعار كان مذهلاً وفاقت توقعاتي! فريق غربي براندينج محترف ومبدع.",
    author: "نورة خالد",
    avatar: "https://placehold.co/100x100.png", 
    dataAiHint: "woman portrait"
  },
  {
    quote: "الموقع الإلكتروني الذي صمموه لي سهل الاستخدام وجذاب للغاية. زادت مبيعاتي بفضلهم!",
    author: "أحمد السالم",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "man smiling"
  },
  {
    quote: "تجربة العمل مع غربي براندينج كانت رائعة. فهموا رؤيتي ونفذوها بإتقان. أنصح بهم بشدة.",
    author: "فاطمة علي",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "business woman" 
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
            <MessageSquareQuote className="h-7 w-7 text-primary" />
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            شهادات حقيقية من عملاء سعداء بخدماتنا وجودة عملنا.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {staticTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative w-20 h-20 rounded-full mb-5 border-2 border-primary/50 overflow-hidden">
                <Image 
                  src={testimonial.avatar} 
                  alt={`صورة ${testimonial.author}`} 
                  data-ai-hint={testimonial.dataAiHint}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <blockquote className="text-muted-foreground italic text-base md:text-lg leading-relaxed mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-foreground text-sm">– {testimonial.author}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 pt-10 border-t border-border/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <Edit3 className="h-6 w-6 text-primary" />
              شاركنا تجربتك
            </h3>
            <p className="text-md text-muted-foreground max-w-lg mx-auto">
              نقدر رأيك ونتطلع لسماع تجربتك مع خدمات غربي براندينج.
            </p>
          </div>
          <TestimonialSubmissionForm />
        </div>
      </div>
    </section>
  );
};
