
"use server";

import { z } from "zod";

const EmailContactInputSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن لا يقل عن حرفين.").max(50, "الاسم يجب أن لا يتجاوز 50 حرفًا."),
  email: z.string().email("البريد الإلكتروني المدخل غير صالح."),
  subject: z.string().min(5, "الموضوع يجب أن لا يقل عن 5 أحرف.").max(100, "الموضوع يجب أن لا يتجاوز 100 حرف."),
  message: z.string().min(10, "الرسالة يجب أن لا تقل عن 10 أحرف.").max(1000, "الرسالة يجب أن لا تتجاوز 1000 حرف."),
});

export type EmailContactInput = z.infer<typeof EmailContactInputSchema>;

export type EmailContactOutput = {
  message: string;
};

export async function handleEmailContactAction(
  prevState: any,
  formData: FormData
): Promise<{ data: EmailContactOutput | null; error: string | null; fieldErrors?: Record<string, string[]>}> {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const validationResult = EmailContactInputSchema.safeParse(rawFormData);

  if (!validationResult.success) {
    return { data: null, error: "الرجاء التحقق من المدخلات.", fieldErrors: validationResult.error.flatten().fieldErrors };
  }

  try {
    // In a real application, you would integrate with an email sending service here.
    // For this example, we'll just log the data to the console and simulate success.
    console.log("New contact form submission received:", validationResult.data);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 700));

    return { data: { message: "تم إرسال رسالتك بنجاح! سنتواصل معك في أقرب وقت ممكن." }, error: null };
  } catch (e) {
    console.error("Error submitting contact form:", e);
    const errorMessage = e instanceof Error ? e.message : "حدث خطأ غير متوقع أثناء محاولة إرسال الرسالة.";
    return { data: null, error: `فشل إرسال الرسالة: ${errorMessage}` };
  }
}
