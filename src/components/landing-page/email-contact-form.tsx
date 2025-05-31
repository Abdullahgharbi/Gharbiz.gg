
"use client";

import React from "react";
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
import { handleEmailContactAction, type EmailContactOutput } from "@/app/actions/emailContactAction";
import { Loader2, MailCheck, Send } from "lucide-react"; // Changed icon
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن لا يقل عن حرفين." }).max(50, { message: "الاسم يجب أن لا يتجاوز 50 حرفًا." }),
  email: z.string().email({ message: "البريد الإلكتروني المدخل غير صالح." }),
  subject: z.string().min(5, { message: "الموضوع يجب أن لا يقل عن 5 أحرف." }).max(100, { message: "الموضوع يجب أن لا يتجاوز 100 حرف." }),
  message: z.string().min(10, { message: "الرسالة يجب أن لا تقل عن 10 أحرف." }).max(1000, { message: "الرسالة يجب أن لا تتجاوز 1000 حرف." }),
});

type FormData = z.infer<typeof formSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/80 text-primary-foreground rounded-md text-lg py-3">
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
      أرسل رسالتك
    </Button>
  );
}

export const EmailContactForm = () => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(handleEmailContactAction, {
    data: null,
    error: null,
    fieldErrors: {},
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
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
      toast({
        title: "🎉 تم الإرسال بنجاح!",
        description: state.data.message,
        variant: "default",
        duration: 5000,
      });
      form.reset();
    } else if (state.error) {
      toast({
        title: "⚠️ خطأ في الإرسال",
        description: state.error,
        variant: "destructive",
        duration: 5000,
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
  }, [state, toast, form.reset, form.setError]);

  return (
    <Card className="w-full max-w-xl mx-auto shadow-xl bg-card border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-center text-primary flex items-center justify-center gap-2">
          <MailCheck className="h-6 w-6" /> تواصل معنا عبر البريد
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground text-sm pt-1">
          املأ النموذج أدناه وسنحرص على الرد عليك في أقرب فرصة.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-5 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-muted-foreground text-sm">الاسم الكامل</Label>
              <Input id="name" name="name" placeholder="مثال: نورة عبدالله" {...form.register("name")} className="bg-input border-border/70 focus:ring-primary text-foreground placeholder:text-muted-foreground/70 rounded-md" aria-invalid={form.formState.errors.name ? "true" : "false"} />
              {form.formState.errors.name && (<p className="text-xs text-destructive pt-1">{form.formState.errors.name.message}</p>)}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-muted-foreground text-sm">البريد الإلكتروني</Label>
              <Input id="email" name="email" type="email" placeholder="email@example.com" {...form.register("email")} className="bg-input border-border/70 focus:ring-primary text-foreground placeholder:text-muted-foreground/70 rounded-md" aria-invalid={form.formState.errors.email ? "true" : "false"} />
              {form.formState.errors.email && (<p className="text-xs text-destructive pt-1">{form.formState.errors.email.message}</p>)}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="subject" className="text-muted-foreground text-sm">الموضوع</Label>
            <Input id="subject" name="subject" placeholder="بخصوص خدمات تصميم الهوية البصرية..." {...form.register("subject")} className="bg-input border-border/70 focus:ring-primary text-foreground placeholder:text-muted-foreground/70 rounded-md" aria-invalid={form.formState.errors.subject ? "true" : "false"} />
            {form.formState.errors.subject && (<p className="text-xs text-destructive pt-1">{form.formState.errors.subject.message}</p>)}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-muted-foreground text-sm">الرسالة</Label>
            <Textarea id="message" name="message" placeholder="مرحباً فريق غربي، أود الاستفسار عن..." {...form.register("message")} className="bg-input border-border/70 focus:ring-primary text-foreground placeholder:text-muted-foreground/70 rounded-md" rows={5} aria-invalid={form.formState.errors.message ? "true" : "false"} />
            {form.formState.errors.message && (<p className="text-xs text-destructive pt-1">{form.formState.errors.message.message}</p>)}
          </div>
        </CardContent>
        <CardFooter className="pt-3 pb-6 px-6">
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
};
