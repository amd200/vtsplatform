import { z } from "zod";

export const forgetPasswordSchema = z.object({
  email: z.string().min(1, "البريد الإلكتروني مطلوب").email("من فضلك أدخل بريدًا إلكترونيًا صحيحًا"),
});
export type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
