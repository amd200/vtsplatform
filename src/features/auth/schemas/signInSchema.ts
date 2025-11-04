import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "البريد الإلكتروني مطلوب").email("من فضلك أدخل بريدًا إلكترونيًا صحيحًا"),
  // phone: z
  //   .string()
  //   .nonempty("رقم الهاتف مطلوب")
  //   .regex(/^\d{11}$/, { message: "رقم الهاتف يجب أن يكون 11 رقمًا" }),
  password: z
    .string()
    .nonempty("كلمة المرور مطلوبة")
    .min(6, { message: "كلمة السر يجب أن تكون 6 أحرف على الأقل" })
    .regex(/^(?=.*[0-9!@#$%^&*])/, {
      message: "كلمة السر يجب أن تحتوي على رقم أو رمز",
    }),
});
export type SignInSchema = z.infer<typeof signInSchema>;
