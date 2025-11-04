import { z } from "zod";

export const loginSchemaWithCode = z.object({
  code: z.string(),

  password: z
    .string()
    .nonempty("كلمة المرور مطلوبة")
    .min(6, { message: "كلمة السر يجب أن تكون 6 أحرف على الأقل" })
    .regex(/^(?=.*[0-9!@#$%^&*])/, {
      message: "كلمة السر يجب أن تحتوي على رقم أو رمز",
    }),
});
export type LoginSchemaWithCode = z.infer<typeof loginSchemaWithCode>;
