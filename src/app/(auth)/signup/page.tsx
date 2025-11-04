"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import SignUpForm from "@/features/auth/componetns/SignUpForm";
const formSchema = z.object({
  phoneNumber: z.string().optional(),
  password: z.string().optional(),
  code: z.string().optional(),
});

function Page() {
  const [useCodeOnly, setUseCodeOnly] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="text-center">
        <h2 className="text-primary text-3xl mb-2">تسجيل طالب</h2>
        <p className="text-xs">انشئ حسابك الان</p>
      </div>
      <SignUpForm />
    </>
  );
}

export default Page;
