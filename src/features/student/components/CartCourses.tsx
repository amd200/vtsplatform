"use client";
import TitleSection from "@/components/shared/TitleSection";
import React, { useState } from "react";
import { useDeleteCourseFromCartMutation, useGetStudentCartQuery } from "../services/cartApi";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { CartItem } from "../types/cart.types";
import { RecycleIcon, CreditCard, Wallet, Smartphone, Landmark, Zap, Image as ImageIcon, CheckCircle, Upload, X, FileText, Check, Receipt } from "lucide-react";
import { useFawryPayMutation, useStudentWalletMutation } from "../services/paymentApi";
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// Helper component for the payment icon box (White background)
const PaymentIconBox = ({ children, iconColorClass }: { children: React.ReactNode; iconColorClass: string }) => <div className={`w-14 h-14 flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-sm border border-gray-100 ${iconColorClass} shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}>{children}</div>;

// Define payment methods
const paymentOptions = [
  {
    value: "fawry",
    label: "فوري",
    description: "ادفع نقدًا أو ببطاقتك عبر فوري",
    iconColorClass: "text-orange-600",
    icon: () => <Zap className="w-7 h-7" />,
  },
  {
    value: "e-wallets",
    label: "المحافظ الإلكترونية",
    description: "فودافون كاش، اتصالات كاش، اورنج كاش",
    iconColorClass: "text-blue-600",
    icon: () => <Wallet className="w-7 h-7" />,
  },
  {
    value: "platform-wallet",
    label: "محفظة المنصة",
    description: "استخدم رصيدك من محفظة المنصة",
    iconColorClass: "text-purple-600",
    icon: () => <CreditCard className="w-7 h-7" />,
  },
  {
    value: "bank-transfer",
    label: "إرسال إيصال تحويل",
    description: "حوّل المبلغ وأرفق صورة الإيصال",
    iconColorClass: "text-emerald-600",
    icon: () => <Receipt className="w-7 h-7" />,
    isUpload: true,
  },
];

// **********************************************
// ********* PAYMENT DIALOG COMPONENT ***********
// **********************************************

const PaymentDialog = ({ isOpen, onOpenChange, total, invoiceId, cartCourses }: { isOpen: boolean; onOpenChange: (open: boolean) => void; total: number; invoiceId?: string; cartCourses: CartItem[] | null | undefined }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handlePaymentChange = (value: string) => {
    setPaymentMethod(value);
    if (value !== "bank-transfer") {
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleConfirmPayment = async () => {
    if (!paymentMethod) {
      toast.error("يرجى اختيار طريقة الدفع أولاً.");
      return;
    }

    if (paymentMethod === "bank-transfer" && !selectedFile) {
      toast.error("يرجى إرفاق صورة إيصال التحويل للمتابعة.");
      return;
    }

    if (total === 0) {
      toast.error("سلة المشتريات فارغة.");
      return;
    }

    toast.info(`جاري تنفيذ عملية الدفع عبر: ${paymentOptions.find((opt) => opt.value === paymentMethod)?.label}...`);

    onOpenChange(false);
    setPaymentMethod("");
    setSelectedFile(null);
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="h-[600px]">
        <DialogHeader className="border-b pb-5 space-y-3">
          <DialogTitle className="text-xl  text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            اختر طريقة الدفع
          </DialogTitle>
          <DialogDescription>اختر الطريقة الأنسب لك لإتمام عملية الشراء</DialogDescription>
        </DialogHeader>

        <div className="payment-options-dialog space-y-4 max-h-[500px] overflow-y-auto px-2 py-4">
          <div className="grid  gap-5">
            {paymentOptions.map((item) => (
              <div key={item.value} className="relative">
                <div
                  onClick={() => handlePaymentChange(item.value)}
                  className={`
                      group flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300
                      hover:scale-[1.02] active:scale-[0.98]
                      ${paymentMethod === item.value ? "border-3 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-transparent shadow-xl shadow-primary/20  ring-primary/30" : "border-2 border-gray-200 bg-white hover:border-primary/40 hover:shadow-lg"}
                    `}
                >
                  {/* Icon */}
                  {/* <PaymentIconBox iconColorClass={item.iconColorClass}>{item.icon()}</PaymentIconBox> */}

                  <div
                    className={`
                        w-7 h-7 rounded-full border-3 flex items-center justify-center shrink-0 mt-1
                        transition-all duration-300
                        ${paymentMethod === item.value ? "border-primary bg-primary shadow-lg shadow-primary/40" : "border-gray-300 bg-white group-hover:border-primary/50"}
                      `}
                  >
                    {paymentMethod === item.value && <Check className="w-4 h-4 text-white animate-in zoom-in duration-200" />}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className=" text-[17px] text-gray-900  leading-tight">{item.label}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Radio Check */}
                </div>

                {/* File Upload Section for Bank Transfer */}
                {item.isUpload && paymentMethod === item.value && (
                  <div className="mt-4 animate-in slide-in-from-top duration-300">
                    <div className="bg-white rounded-2xl border-2 border-primary p-5 shadow-sm">
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Upload className="w-5 h-5 text-primary" />
                          <span className="text-sm font-semibold text-gray-800">إرفاق صورة الإيصال</span>
                        </div>

                        {/* File Display */}
                        <div className="bg-white rounded-xl border-2 border-primary p-4 min-h-[60px] flex items-center justify-center">
                          {selectedFile ? (
                            <div className="flex items-center gap-3 w-full">
                              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{selectedFile.name}</p>
                                <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          ) : (
                            <div className="text-center">
                              <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-500">لم يتم اختيار ملف بعد</p>
                            </div>
                          )}
                        </div>

                        {/* Upload Button */}
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <div className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-base font-bold rounded-xl text-white bg-primary hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                            <Upload className="w-5 h-5" />
                            {selectedFile ? "تغيير الصورة" : "اختيار صورة الإيصال"}
                          </div>
                          <input id="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,.pdf" />
                        </label>

                        <p className="text-xs text-gray-600 text-center mt-2">الصيغ المدعومة: JPG, PNG, PDF (حتى 5MB)</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <DialogFooter className="border-t pt-5 flex items-center !justify-between gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">إجمالي المبلغ</p>
            <p className="text-xl font-bold text-gray-900">{total.toFixed(2)} جنيه</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => onOpenChange(false)} className="px-6 py-3 text-base font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-200 active:scale-95">
              إلغاء
            </button>
            <button onClick={handleConfirmPayment} disabled={!paymentMethod || (paymentMethod === "bank-transfer" && !selectedFile)} className="px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-primary to-primary/90 rounded-xl hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:scale-105 active:scale-95 disabled:scale-100 disabled:shadow-none flex items-center gap-2">
              <Check className="w-5 h-5" />
              تأكيد الدفع
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
// **********************************************
// ********* MAIN COMPONENT *********************
// **********************************************

function CartCourses({ invoiceId }: { invoiceId?: string }) {
  const { data } = useGetStudentCartQuery();
  const cartCaourses = data?.Data;
  const total = cartCaourses?.reduce((sum, cart: CartItem) => sum + cart.Price, 0) || 0;
  const [deleteCourseFromCart] = useDeleteCourseFromCartMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // API mutations are not used directly here, but kept for context.
  // const [fawryPay] = useFawryPayMutation();
  // const [studentWallet] = useStudentWalletMutation();

  const deleteCourse = async (id: string) => {
    try {
      await deleteCourseFromCart(id).unwrap();
      toast.success("تم حذف الدورة بنجاح من السلة.");
    } catch (error) {
      console.error("Failed to delete course:", error);
      toast.error("فشل في حذف الدورة من السلة.");
    }
  };

  // Removed handleCheckout, as the logic is now inside handleConfirmPayment in the Dialog.
  // The button only needs to toggle the dialog.

  return (
    <>
      {/* 1. قائمة الدورات في السلة */}
      <div className="content bg-[#f9f9f9] py-7 px-3 rounded space-y-5">
        {cartCaourses && cartCaourses.length > 0 ? (
          cartCaourses.map((cartCourse: CartItem, index) => (
            <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2 font-medium shadow-sm">
              {/* ... Cart Item Details ... (Unchanged) */}
              <div className="flex gap-1">
                <span>الاسم :</span>
                <span className="font-normal">{cartCourse?.Title}</span>
              </div>
              <div className="flex gap-1">
                <span>تاريخ الاضافة :</span>
                <span className="font-normal">{formatDate(cartCourse?.AddedDate)}</span>
              </div>
              <div className="flex gap-1">
                <span>السعر :</span>
                <span className="font-normal">
                  {cartCourse?.Price} {cartCourse?.CurrencyCode}
                </span>
              </div>
              <div className="flex gap-1">
                <Button onClick={() => deleteCourse(cartCourse?.Id)} className="flex items-center gap-1 bg-red-500 hover:bg-primary" size="sm">
                  <RecycleIcon className="w-4 h-4" /> مسح
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-white rounded-md text-gray-500 shadow-sm">لا توجد دورات في سلة المشتريات حاليًا.</div>
        )}
      </div>

      {/* 2. قسم الإجمالي وزر الشراء - (بدون طرق دفع مرئية) */}
      <section className="cart-total mt-8">
        <div className="container">
          <div className="details-total w-full max-w-[500px] mx-auto">
            <h5 className="ar-medium mb-3 text-xl">ملخص الشراء</h5>

            <table className="w-full border border-gray-300 border-collapse text-center mb-6">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold bg-gray-50">حالة الفاتورة</td>
                  <td className="py-2 px-4">{(data?.Data?.length ?? 0) > 0 ? "Open" : "Closed"}</td>
                </tr>
                <tr>
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold bg-gray-50">إجمالي</td>
                  <td className="py-2 px-4  ">{total} جنيه</td>
                </tr>
              </tbody>
            </table>

            {/* DialogTrigger - زر اتمام الشراء */}
            <Button onClick={() => setIsDialogOpen(true)} className="w-full" size={"lg"} variant={"default"}>
              اتمام الشراء
            </Button>
          </div>
        </div>
      </section>

      {/* Dialog Component (النافذة المنبثقة) */}
      <PaymentDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} total={total} invoiceId={invoiceId} cartCourses={cartCaourses ?? []} />
    </>
  );
}

export default CartCourses;
