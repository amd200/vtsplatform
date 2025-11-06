"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { useSignInMutation } from "@/features/auth/services/authApi";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  phoneNumber: z.string().optional(),
  password: z.string().optional(),
  code: z.string().optional(),
});

function Page() {
  const { data: session } = useSession();
  const [useCodeOnly, setUseCodeOnly] = useState(false);
  const router = useRouter();
  function onChange(value: string) {
    console.log("Captcha value:", value);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
      code: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const res = await signIn("credentials", {
      UserName: values.phoneNumber,
      Password: values.password,
      redirect: true,
    });
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
          {/* <div className="flex justify-center">
            <ReCAPTCHA sitekey="6LdmA3IoAAAAAM57OfILdg1UfEPyEBQ5ya2gUbyG" onChange={onChange} />,
          </div> */}
          <div className="flex justify-between items-center">
            <p className="text-xs">
              ليس لديك حساب؟{" "}
              <Link className="text-primary" href="/">
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
