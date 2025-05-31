
"use client";

import React, { useState } from "react";
import { useActionState } from "react"; 
import { useFormStatus } from "react-dom"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { handleGenerateTestimonialAction } from "@/app/actions/testimonialActions";
import type { GenerateTestimonialOutput } from "@/ai/flows/generate-testimonial";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  companyDescription: z.string().min(10, { message: "وصف الشركة يجب أن لا يقل عن 10 أحرف." }).max(500, { message: "وصف الشركة يجب أن لا يتجاوز 500 حرف." }),
  slogan: z.string().min(3, { message: "الشعار يجب أن لا يقل عن 3 أحرف." }).max(100, { message: "الشعار يجب أن لا يتجاوز 100 حرف." }),
  preferredColors: z.string().min(3, { message: "الألوان المفضلة يجب أن لا تقل عن 3 أحرف." }).max(100, { message: "الألوان المفضلة يجب أن لا تتجاوز 100 حرف." }),
});

type FormData = z.infer<typeof formSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      أنشئ شهادة بالذكاء الاصطناعي
    </Button>
  );
}

export const AITestimonialGenerator = () => {
  const [generatedTestimonial, setGeneratedTestimonial] = useState<GenerateTestimonialOutput | null>(null);
  const { toast } = useToast();

  const [state, formAction] = useActionState(handleGenerateTestimonialAction, { 
    data: null,
    error: null,
    fieldErrors: {},
  });
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyDescription: "",
      slogan: "",
      preferredColors: "",
    },
    // Pass server-side errors for initial validation display
    errors: state?.fieldErrors ? 
      Object.entries(state.fieldErrors).reduce((acc, [key, value]) => {
        if (value && value.length > 0) {
          acc[key as keyof FormData] = { type: 'server', message: value[0] };
        }
        return acc;
      }, {} as any) 
      : undefined,
  });

  React.useEffect(() => {
    if (state.data) {
      setGeneratedTestimonial(state.data);
      toast({
        title: "🎉 تم إنشاء الشهادة بنجاح!",
        description: "يمكنك الآن استخدام الشهادة الجديدة.",
      });
      form.reset(); 
    } else if (state.error) {
      toast({
        title: "⚠️ فشل إنشاء الشهادة",
        description: state.error,
        variant: "destructive",
      });
    }
    
    if (state.fieldErrors) {
        for (const [fieldName, errors] of Object.entries(state.fieldErrors)) {
          if (errors && errors.length > 0) {
            form.setError(fieldName as keyof FormData, {
              type: 'server',
              message: errors[0],
            });
          }
        }
      }
  }, [state.data, state.error, state.fieldErrors, toast, form.reset, form.setError]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center gap-2">
           <Wand2 /> أداة إنشاء الشهادات بالذكاء الاصطناعي
        </CardTitle>
        <CardDescription className="text-center text-foreground/80">
          أدخلي معلومات علامتك التجارية ودعي الذكاء الاصطناعي يساعدك في كتابة شهادة عميل مميزة.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="companyDescription" className="text-foreground/90">وصف الشركة/العلامة التجارية</Label>
            <Textarea
              id="companyDescription"
              name="companyDescription"
              placeholder="مثال: نقدم مستحضرات تجميل طبيعية عالية الجودة..."
              {...form.register("companyDescription")}
              className="bg-background border-input focus:ring-primary"
              aria-invalid={form.formState.errors.companyDescription ? "true" : "false"}
            />
            {form.formState.errors.companyDescription && (
              <p className="text-sm text-destructive">{form.formState.errors.companyDescription.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="slogan" className="text-foreground/90">شعار الشركة (Slogan)</Label>
            <Input
              id="slogan"
              name="slogan"
              placeholder="مثال: جمالك يبدأ من هنا"
              {...form.register("slogan")}
              className="bg-background border-input focus:ring-primary"
              aria-invalid={form.formState.errors.slogan ? "true" : "false"}
            />
            {form.formState.errors.slogan && (
              <p className="text-sm text-destructive">{form.formState.errors.slogan.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredColors" className="text-foreground/90">الألوان المفضلة للعلامة التجارية</Label>
            <Input
              id="preferredColors"
              name="preferredColors"
              placeholder="مثال: وردي، ذهبي، أبيض"
              {...form.register("preferredColors")}
              className="bg-background border-input focus:ring-primary"
              aria-invalid={form.formState.errors.preferredColors ? "true" : "false"}
            />
            {form.formState.errors.preferredColors && (
              <p className="text-sm text-destructive">{form.formState.errors.preferredColors.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
        </CardFooter>
      </form>
      {generatedTestimonial && (
        <div className="p-6 border-t border-border mt-4">
          <h4 className="text-lg font-semibold mb-2 text-primary">الشهادة المُنشأة:</h4>
          <blockquote className="p-4 bg-accent/50 border-r-4 border-primary rounded text-foreground/90 italic">
            <p className="mb-2">"{generatedTestimonial.testimonial}"</p>
            <footer className="text-sm font-medium">– {generatedTestimonial.author}</footer>
          </blockquote>
        </div>
      )}
    </Card>
  );
};
