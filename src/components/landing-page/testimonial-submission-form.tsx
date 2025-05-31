
"use client";

import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { handleSubmitTestimonialAction } from "@/app/actions/submitTestimonialAction";
import type { SubmitTestimonialOutput } from "@/app/actions/submitTestimonialAction";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  authorName: z.string().min(2, { message: "الاسم يجب أن لا يقل عن حرفين." }).max(50, { message: "الاسم يجب أن لا يتجاوز 50 حرفًا." }),
  testimonialText: z.string().min(10, { message: "الشهادة يجب أن لا تقل عن 10 أحرف." }).max(500, { message: "الشهادة يجب أن لا تتجاوز 500 حرف." }),
});

type FormData = z.infer<typeof formSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      أرسل شهادتك
    </Button>
  );
}

export const TestimonialSubmissionForm = () => {
  const { toast } = useToast();
  const [submissionResult, setSubmissionResult] = useState<SubmitTestimonialOutput | null>(null);

  const [state, formAction] = useFormState(handleSubmitTestimonialAction, {
    data: null,
    error: null,
    fieldErrors: {},
  });
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      authorName: "",
      testimonialText: "",
    },
    errors: state?.fieldErrors ? 
      Object.entries(state.fieldErrors).reduce((acc, [key, value]) => {
        acc[key as keyof FormData] = { type: 'manual', message: value?.[0] || "خطأ غير معروف" };
        return acc;
      }, {} as any) 
      : {},
  });

  React.useEffect(() => {
    if (state.data) {
      setSubmissionResult(state.data);
      toast({
        title: "🎉 شكرًا لك!",
        description: state.data.message,
        variant: "default", 
      });
      form.reset(); 
    } else if (state.error) {
      toast({
        title: "⚠️ حدث خطأ",
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
  }, [state, toast, form]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl bg-card border-border/50 mt-8">
      <CardHeader className="pb-4">
        {/* Title and description moved to TestimonialsSection */}
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6 pt-0">
          <div className="space-y-2">
            <Label htmlFor="authorName" className="text-muted-foreground">اسمك</Label>
            <Input
              id="authorName"
              name="authorName"
              placeholder="مثال: فاطمة أحمد"
              {...form.register("authorName")}
              className="bg-input border-border/70 focus:ring-primary text-foreground placeholder:text-muted-foreground/70 rounded-md"
              aria-invalid={form.formState.errors.authorName ? "true" : "false"}
            />
            {form.formState.errors.authorName && (
              <p className="text-sm text-destructive">{form.formState.errors.authorName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="testimonialText" className="text-muted-foreground">شهادتك</Label>
            <Textarea
              id="testimonialText"
              name="testimonialText"
              placeholder="اكتب شهادتك هنا..."
              {...form.register("testimonialText")}
              className="bg-input border-border/70 focus:ring-primary text-foreground placeholder:text-muted-foreground/70 rounded-md"
              rows={5}
              aria-invalid={form.formState.errors.testimonialText ? "true" : "false"}
            />
            {form.formState.errors.testimonialText && (
              <p className="text-sm text-destructive">{form.formState.errors.testimonialText.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-2">
          <SubmitButton />
        </CardFooter>
      </form>
      {submissionResult && !state.error && (
        <div className="p-4 border-t border-border/20 mt-4 text-center">
          <p className="text-primary">{submissionResult.message}</p>
        </div>
      )}
    </Card>
  );
};
