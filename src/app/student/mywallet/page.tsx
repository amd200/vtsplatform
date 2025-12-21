"use client";
import TitleSection from "@/components/shared/TitleSection";
import MyWallet from "@/features/student/components/MyWallet";
import { useGetStudentWalletQuery, useReChargeBalanceWithCardMutation, useReChargeBalanceWithEWalletMutation, useReChargeBalanceWithFawryMutation, useRequestRefundShippingMutation, useRequestRefundShippingQuery } from "@/features/student/services/studentApi";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useFawryMutation } from "@/features/student/services/paymentApi";
import { useSession } from "next-auth/react";
import { useToastMessage } from "@/hooks/useToastMessage";
import { BaseResponse } from "@/types/common.types";
function Page() {
  const [reChargeBalanceWithFawry] = useReChargeBalanceWithFawryMutation();
  const [reChargeBalanceWithEWallet] = useReChargeBalanceWithEWalletMutation();
  const [reChargeBalanceWithCard] = useReChargeBalanceWithCardMutation();
  const { data, isLoading } = useGetStudentWalletQuery();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [fawry] = useFawryMutation();
  const { data: session } = useSession();
  const { error: toastError, success, info } = useToastMessage();
  const [form, setForm] = useState({
    phone: "",
    subject: "",
    message: "",
  });
  const [requestRefundShipping] = useRequestRefundShippingMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const reCharge = async () => {
    try {
      if (amount == "" || phone == "") {
        info("قم بملئ جميع الحقول");
        return;
      }
      if (paymentMethod == "fawry") {
        const res = await reChargeBalanceWithFawry({ phoneNumber: phone, amount: Number(amount) }).unwrap();

        const merchantCode = "siYxylRjSPzP3SHpCxPXEg==";

        const payload = {
          merchantCode,
          merchantRefNum: res?.Data?.SubId,
          customerMobile: "01063751102",
          customerEmail: "vts@vts-co.com",
          customerName: res?.Data?.ClientName,
          chargeItems: [
            {
              itemId: session?.user?.id,
              price: parseFloat(res?.Data?.price ?? "0"),
              quantity: 1,
              imageUrl: "#",
            },
          ],
          returnUrl: "https://vedu-demo.vtsitco.com",
          authCaptureModePayment: false,
          signature: res?.Data?.signature,
        };

        const re = await fawry(payload);

        if (re?.data) {
          window.location.href = re.data;
        }
      }
      if (paymentMethod == "wallet") {
        const res = await reChargeBalanceWithEWallet({ phoneNumber: phone, amount: Number(amount) }).unwrap();
        if (res?.Data) {
          window.location.href = res.Data;
        }
      }
      if (paymentMethod == "card") {
        const res = await reChargeBalanceWithCard({ phoneNumber: phone, amount: Number(amount) }).unwrap();
        if (res?.Data) {
          window.location.href = res.Data;
        }
      }
    } catch (err) {
      const error = err as BaseResponse<unknown>;
      toastError(error?.Message);
    }
  };

  const handleReqeustRefunding = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (form?.message == "" && form?.phone == "" && form?.subject == "") {
        info("قم بملئ جميع الحقول");
        return;
      }
      const res = await requestRefundShipping({ Message: form?.message, Phone: form?.phone, Subject: form?.subject }).unwrap();
      success(res?.Message);
      setForm({
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      const error = err as BaseResponse<unknown>;
      toastError(error?.Message);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="محفظتي" />
        </div>
        <div className="grid grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3 col-span-12">
            <div className="rounded border p-3">
              <span className="text-sm ar-medium mb-2">الرصيد المتاح</span>
              <h4 className="text-2xl block mb-5">{data?.Data?.StudentBalance} جنيها</h4>
              <Dialog>
                <DialogTrigger className="w-full mb-2">
                  {" "}
                  <Button className="w-full">شحن المحفظة</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-ar-medium">شحنات المحفظة</DialogTitle>
                  </DialogHeader>

                  <form className="space-y-3">
                    {/* <Input placeholder="الكود" /> */}
                    <div className="space-y-3 mt-3">
                      <Input placeholder="رقم التليفون" value={phone} onChange={(e) => setPhone(e.target.value)} />

                      <Input type="number" placeholder="المبلغ" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} defaultValue="comfortable" dir="rtl">
                      <div className="flex border p-4 rounded border-dashed items-center gap-3">
                        <RadioGroupItem value="wallet" id="wallet" />
                        <Label htmlFor="wallet" className="flex items-start flex-col">
                          <img src="https://drooosk.com/img/mobile-wallets.png" alt="" />
                          <span className="font-ar-medium text-xs  text-gray-600">الدفع بفودافون كاش ومحافظ الجوال الاخرى</span>
                        </Label>
                      </div>
                      <div className="flex border p-4 rounded border-dashed items-center gap-3">
                        <RadioGroupItem value="fawry" id="fawry" />
                        <Label htmlFor="fawry" className="flex items-start flex-col">
                          <img width={100} src="https://www.atfawry.com/atfawry/plugin/assets/img/svg/fawry-business.svg" alt="" />
                          <span className="font-ar-medium text-xs  text-gray-600">الدفع بواسطة فوري</span>
                        </Label>{" "}
                      </div>
                      <div className="flex border p-4 rounded border-dashed items-center gap-3">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">فيزا</Label>
                      </div>
                    </RadioGroup>
                    <Button type="button" className="mt-2 ms-auto block" onClick={reCharge}>
                      تفعيل
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button variant={"outline"} className="w-full">
                    استعادة مبلغ شحن
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-ar-medium">طلب استعادة مبلغ شحن</DialogTitle>
                  </DialogHeader>

                  <form className="space-y-3" onSubmit={handleReqeustRefunding}>
                    <Input name="phone" placeholder="رقم الهاتف" value={form.phone} onChange={handleChange} />

                    <Input name="subject" placeholder="الموضوع" value={form.subject} onChange={handleChange} />

                    <Textarea name="message" placeholder="الرسالة" value={form.message} onChange={handleChange} />

                    <Button type="submit" className="mt-2 ms-auto block">
                      إرسال الطلب
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="lg:col-span-9 col-span-12 ">
            <MyWallet charges={data?.Data?.StudentCharges || []} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
