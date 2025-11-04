import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    email: z.string(),
    password: z
      .string()
      .min(6, "كلمة السر يجب أن تكون 6 أحرف على الأقل")
      .regex(/^(?=.*[0-9!@#$%^&*])/, "كلمة السر يجب أن تحتوي على رقم أو رمز"),
    passwordConfirm: z.string().min(1, "تأكيد كلمة السر مطلوب"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "كلمة السر وتأكيدها غير متطابقين",
    path: ["passwordConfirm"],
  });
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
