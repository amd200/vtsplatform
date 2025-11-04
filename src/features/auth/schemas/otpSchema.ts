import { z } from "zod";

export const otpSchema = z.object({
  otp: z
    .string()
    .min(4, "الكود يجب أن يكون 4 أرقام")
    .max(4, "الكود يجب أن يكون 4 أرقام")
    .regex(/^[0-9]+$/, "الكود يجب أن يحتوي على أرقام فقط"),
});

export type OTPSchema = z.infer<typeof otpSchema>;
