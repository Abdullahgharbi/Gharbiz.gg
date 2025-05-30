"use server";

import { generateTestimonial, type GenerateTestimonialInput, type GenerateTestimonialOutput } from "@/ai/flows/generate-testimonial";
import { z } from "zod";

const GenerateTestimonialInputSchema = z.object({
  companyDescription: z.string().min(10, "وصف الشركة قصير جدًا.").max(500, "وصف الشركة طويل جدًا."),
  slogan: z.string().min(3, "الشعار قصير جدًا.").max(100, "الشعار طويل جدًا."),
  preferredColors: z.string().min(3, "الألوان المفضلة قصيرة جدًا.").max(100, "الألوان المفضلة طويلة جدًا."),
});

export async function handleGenerateTestimonialAction(
  prevState: any,
  formData: FormData
): Promise<{ data: GenerateTestimonialOutput | null; error: string | null; fieldErrors?: Record<string, string[]>}> {
  const rawFormData = {
    companyDescription: formData.get("companyDescription"),
    slogan: formData.get("slogan"),
    preferredColors: formData.get("preferredColors"),
  };

  const validationResult = GenerateTestimonialInputSchema.safeParse(rawFormData);

  if (!validationResult.success) {
    return { data: null, error: "الرجاء التحقق من المدخلات.", fieldErrors: validationResult.error.flatten().fieldErrors };
  }
  
  try {
    const result = await generateTestimonial(validationResult.data as GenerateTestimonialInput);
    return { data: result, error: null };
  } catch (e) {
    console.error("Error generating testimonial:", e);
    const errorMessage = e instanceof Error ? e.message : "حدث خطأ غير متوقع أثناء إنشاء الشهادة.";
    return { data: null, error: `فشل إنشاء الشهادة: ${errorMessage}` };
  }
}
