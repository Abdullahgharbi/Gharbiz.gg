
"use server";

import { z } from "zod";

const SubmitTestimonialInputSchema = z.object({
  authorName: z.string().min(2, "الاسم قصير جدًا.").max(50, "الاسم طويل جدًا."),
  testimonialText: z.string().min(10, "الشهادة قصيرة جدًا.").max(500, "الشهادة طويلة جدًا."),
});

export type SubmitTestimonialInput = z.infer<typeof SubmitTestimonialInputSchema>;

export type SubmitTestimonialOutput = {
  message: string;
};

export async function handleSubmitTestimonialAction(
  prevState: any,
  formData: FormData
): Promise<{ data: SubmitTestimonialOutput | null; error: string | null; fieldErrors?: Record<string, string[]>}> {
  const rawFormData = {
    authorName: formData.get("authorName"),
    testimonialText: formData.get("testimonialText"),
  };

  const validationResult = SubmitTestimonialInputSchema.safeParse(rawFormData);

  if (!validationResult.success) {
    return { data: null, error: "الرجاء التحقق من المدخلات.", fieldErrors: validationResult.error.flatten().fieldErrors };
  }
  
  try {
    // In a real application, you would save this data to a database.
    // For this example, we'll just simulate success.
    console.log("New testimonial submitted:", validationResult.data);
    
    // Simulate a short delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return { data: { message: "تم إرسال شهادتك بنجاح! شكرًا لمشاركتك." }, error: null };
  } catch (e) {
    console.error("Error submitting testimonial:", e);
    const errorMessage = e instanceof Error ? e.message : "حدث خطأ غير متوقع أثناء إرسال الشهادة.";
    return { data: null, error: `فشل إرسال الشهادة: ${errorMessage}` };
  }
}
