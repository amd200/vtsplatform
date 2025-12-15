"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { success, z } from "zod";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSignInMutation } from "@/features/auth/services/authApi";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useToastMessage } from "@/hooks/useToastMessage";

const phoneSchema = z.object({
  phoneNumber: z.string().min(1, "أدخل رقم الهاتف"),
  password: z.string().min(1, "أدخل كلمة المرور"),
  code: z.string().optional(),
});

const codeSchema = z.object({
  code: z.string().min(1, "أدخل كود الطالب"),
  phoneNumber: z.string().optional(),
  password: z.string().optional(),
});

function Page() {
  const [useCodeOnly, setUseCodeOnly] = useState(false);
  const router = useRouter();
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { error, success } = useToastMessage();

  function onChange(value: string | null) {
    console.log("Captcha value:", value);
    setCaptchaToken(value);
  }
  const form = useForm({
    resolver: zodResolver(useCodeOnly ? codeSchema : phoneSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
      code: "",
    },
  });

  type LoginValues = z.infer<typeof phoneSchema> | z.infer<typeof codeSchema>;
  async function onSubmit(values: LoginValues): Promise<void> {
    // if (!captchaToken) {
    //   error("من فضلك قم بحل اختبار التحقق (reCAPTCHA)");
    //   return;
    // }
    if (useCodeOnly) {
      error("تسجيل الدخول بالكود غير متاح الآن");
      return;
    }
    const res = await signIn("credentials", {
      UserName: values.phoneNumber?.trim(),
      Password: values.password?.trim(),
      redirect: false,
      callbackUrl: "/student",
    });

    if (res?.error) {
      error(res?.error || "حدث خطأ يرجى المحاولة لاحقا");
      return;
    } else {
      success("تم تسجيل الدخول بنجاح");
    }

    router.push("/student");
  }

  return (
    <>
      <div className="text-center">
        <h2 className="text-primary text-3xl mb-2">تسجيل الدخول</h2>
        <p className="text-xs">ادخل اسم المستخدم وكلمة المرور أو كود الطالب</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-5 w-full">
          {!useCodeOnly && (
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="رقم الهاتف" className="w-full " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="كلمة المرور" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {useCodeOnly && (
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="كود الطالب" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Switch className="ms-auto h-7 w-14" thumbClassName="h-6 w-6 data-[state=checked]:-translate-x-7" checked={useCodeOnly} onCheckedChange={(val) => setUseCodeOnly(val)} />
          <div className="flex justify-center">
            <ReCAPTCHA sitekey="6LfdKxEsAAAAAG8FyFKM1KhsQJd8p2EH6HhYtviL" onChange={onChange} />,
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs">
              ليس لديك حساب؟{" "}
              <Link className="text-primary" href="/signup">
                إنشاء حساب{" "}
              </Link>
            </p>
            <Button type="submit">تسجيل الدخول</Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default Page;
