import { z } from "zod";

const genderEnum = z.enum(["ذكر", "انثى"]);
export const signUpSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  lastName: z.string().min(1, "باقي الاسم مطلوب"),
  phoneNumber: z.string().min(10, "رقم الهاتف غير صحيح").max(15, "رقم الهاتف طويل جدًا"),
  country: z.string(),
  // // parentPhone: z.string().min(10, "رقم الهاتف غير صحيح").max(15, "رقم الهاتف طويل جدًا"),
  // // parentEmail: z.string().email("البريد الإلكتروني غير صالح"),
  gender: z.string(),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  confirmPassword: z.string().min(6, "تأكيد كلمة المرور مطلوب"),
  // useCodeOnly: z.boolean(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "كلمة المرور وتأكيدها غير متطابقين",
//   path: ["confirmPassword"],
// });
export type SignUpSchema = z.infer<typeof signUpSchema>;
