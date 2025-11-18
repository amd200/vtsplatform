"use client";
import React, { useEffect, useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
// import ReCAPTCHA from "react-google-recaptcha";
import { signUpSchema, SignUpSchema } from "../schemas/signUpSchema";
import { useSignupMutation } from "../services/authApi";
import { SignUpRequest } from "../types/auth.types";
import { useGetCountriesQuery } from "@/features/student/services/studentApi";
import { toast } from "react-toastify";
import { BaseResponse } from "@/types/common.types";
import ReCAPTCHA from "react-google-recaptcha";

function SignUpForm() {
  const { data } = useGetCountriesQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);
  const [signup] = useSignupMutation();
  const [useCodeOnly, setUseCodeOnly] = useState(false);
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      country: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
  });
  function onChange(value: string | null) {
    console.log("Captcha value:", value);
  }
  async function onSubmit(values: SignUpSchema) {
    const payload: SignUpRequest = {
      FirstName: values.firstName,
      LastName: values.lastName,
      MobileNumber: values.phoneNumber,
      Password: values.password,
      ConfirmPassword: values.confirmPassword,
      CountryId: values?.country,
      Gender: values.gender,
    };
    try {
      const res = await signup(payload).unwrap();
      if (res?.Code == 200) {
        toast.success(res?.Message);
      }
    } catch (err) {
      const error = err as BaseResponse<unknown>;
      toast.error(error?.Message);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-5 w-full">
        <div className="grid lg:grid-cols-2 gap-x-7 gap-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="الاسم الاول" className="w-full " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="باقي الاسم (ثلاثي)" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-12 gap-x-7 gap-y-4">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="col-span-8">
                <FormControl>
                  <Input type="text" placeholder="رقم الهاتف" className="w-full " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="الدولة" />
                    </SelectTrigger>

                    <SelectContent>
                      {data?.Data?.map((country) => (
                        <SelectItem key={country.Id} value={country.Id}>
                          {country.Name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="رقم هاتف ولي الامر" className="w-full " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="البريد الالكتروني لولي الامر" className="w-full " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ذكر">ذكر</SelectItem>
                    <SelectItem value="انثى">انثى</SelectItem>
                  </SelectContent>
                </Select>
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
                <Input type="text" placeholder="كلمة المرور" className="w-full " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="تأكيد كلمة المرور" className="w-full " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <ReCAPTCHA sitekey="6LfdKxEsAAAAAG8FyFKM1KhsQJd8p2EH6HhYtviL" onChange={onChange} />,
        </div>
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
  );
}

export default SignUpForm;
