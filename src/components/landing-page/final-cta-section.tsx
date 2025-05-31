
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const inspiringQuotes = [
  {
    text: "العلم نور والجهل ظلام.",
    author: "مثل عربي شائع",
  },
  {
    text: "من جد وجد ومن زرع حصد.",
    author: "مثل عربي شائع",
  },
  {
    text: "الإبداع هو أن ترى ما يراه الجميع، ولكن بطريقة مختلفة.",
    author: "مقولة منسوبة لألبرت أينشتاين بتصرف",
  },
];

export const FinalCTASection = () => {
  return (
    <section id="quotes-section" className="py-16 md:py-24 bg-secondary/30 text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Quote className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            مقولات ملهمة
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            كلمات تضيء دروبنا وتلهمنا نحو الأفضل.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspiringQuotes.map((quote, index) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 ease-in-out rounded-lg group hover:-translate-y-1 flex flex-col">
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
      </div>
    </section>
  );
};
