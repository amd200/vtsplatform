"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Award, Zap, DollarSign, Target, Aperture, CalendarDays, Key, PlayCircle, Users, Video } from "lucide-react";
import { useDialog } from "@/context/DialogContext";
import { Input } from "../ui/input";
import { BaseResponse, Course } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import { useAddCourseToCartMutation } from "@/features/student/services/cartApi";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { useBuyCourseMutation } from "@/features/student/services/paymentApi";
import { useRouter } from "next/navigation";
import { useActivateCodeMutation } from "@/features/student/services/studentApi";
import { useState } from "react";

function CourseCard({ course }: { course: Course }) {
  const { openDialog } = useDialog();
  const [addCourseToCart] = useAddCourseToCartMutation();
  const [buyCourse] = useBuyCourseMutation();
  const codePurchaseOnly = !course?.Possibilityimplementationcodesonly;
  const [activateCode, { isLoading }] = useActivateCodeMutation();
  const [codeValue, setCodeValue] = useState("");
  const router = useRouter();

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await activateCode(codeValue).unwrap();
      if (res.Data?.IsTheTargetActivated) {
        toast.success("تم التفعيل بنجاح");
      } else {
        toast.error(res.Data?.Message || "هذا الكود غير صحيح");
      }
      setCodeValue("");
    } catch (error) {
      const err = error as BaseResponse<unknown>;
      toast.error(err.Message || "حدث خطأ أثناء التفعيل");
    }
  };

  const handleAddCourseToCart = async (courseExecutionId: string) => {
    try {
      const res = await addCourseToCart({ Id: courseExecutionId }).unwrap();
      toast.success(res.Message || "تمت إضافة الكورس بنجاح");
    } catch (error) {
      const err = error as BaseResponse;
      toast.error(err.Message || "حدث خطأ، حاول مرة أخرى");
    }
  };

  const handleBuyCourseNow = async (id: string) => {
    try {
      const res = await buyCourse(id).unwrap();
      router.push(`/checkout/${res?.Data?.InvoiceData?.Id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const isFree = course?.Price <= 0;
  // السعر بعد الخصم
  const currentPrice = course?.Discount > 0 ? course?.Price - course?.Discount : course?.Price;
  // السعر الأصلي
  const originalPrice = course?.Price;
  const isDiscounted = course?.Discount > 0 && course?.Price > 0;

  return (
    <Card className="shadow-2xl relative pt-0 gap-0 border-4 border-primary transition-all duration-300 rounded-none bg-[#F0F0F0] hover:shadow-primary/50 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0_95%)]">
      {/* 1. الشريط العلوي (Status Bar) - تم تبسيطه */}
      <div className="w-full h-7 bg-primary/90 flex justify-between items-center px-3 border-b-2 border-secondary/50">
        <div className="flex items-center text-xs font-mono text-white gap-2">
          <Zap className="w-3 h-3 text-secondary" />
          <span>[MISSION STATUS: ACTIVE]</span>
        </div>
        <div className="text-xs font-mono text-white">HP: 100%</div>
      </div>

      {/* 2. قسم الصورة (واجهة اللعبة) - تقليل الارتفاع */}
      <div className="relative h-44 w-full bg-gray-50 flex flex-col items-center justify-center border-b-4 border-secondary">
        {course?.ImageLink && (
          <Link href="#" className="block w-full h-full">
            <Image src={`${process.env.NEXT_PUBLIC_FILES_PATH}${course?.ImageLink}`} alt="Course Image" fill className="object-cover transform skew-y-0.5 transition-transform duration-500 hover:scale-105" />
          </Link>
        )}
      </div>

      {/* 3. قسم المحتوى الرئيسي */}
      <div className="py-3 px-4 relative z-10">
        {/* العنوان والوصف */}
        <CardHeader className="p-0 mb-3 border-b border-gray-300 pb-2">
          <CardTitle>
            <Link href="#" className="text-lg font-extrabold text-primary hover:text-secondary transition-colors line-clamp-2">
              {course?.Title}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs text-gray-600 mt-1 line-clamp-2">{course?.Details || "تفاصيل الكورس: ابدأ مهمة الإتقان الآن!"}</CardDescription>
        </CardHeader>

        {/* 4. شريط البيانات/الخصائص (Stats Bar) - تجميع الإحصائيات في صف واحد */}
        <CardContent className="flex justify-between items-center text-center py-2 px-0">
          {/* الدروس والفصول */}
          <div className="flex flex-col items-center gap-1 text-gray-700">
            <Video className="size-4 text-secondary" />
            <span className="text-xs font-mono">دروس: {course?.LesssonsCount}</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-gray-700">
            <Users className="size-4 text-secondary" />
            <span className="text-xs font-mono">فصول: {course?.ChaptersCount}</span>
          </div>

          {/* التواريخ (مجموعة رأسية) */}
          <div className="flex flex-col items-start gap-0 text-gray-700">
            <div className="flex items-center gap-1">
              <CalendarDays className="size-3 text-primary" />
              <span className="text-[10px] font-mono">بدء: {formatDate(course?.StartDate, "date")}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="size-3 text-primary" />
              <span className="text-[10px] font-mono">إنهاء: {formatDate(course?.EndDate, "date")}</span>
            </div>
          </div>
        </CardContent>

        {/* 5. قسم الأزرار والسعر (وحدة الدفع/الـ Loot) */}
        <CardFooter className="p-0 flex flex-col w-full gap-2 border-t border-gray-300 pt-3">
          {/* عرض السعر المركزي المائل */}
          <div className="w-full text-center py-1 bg-white border border-primary/50 rounded-sm transform -skew-x-3">
            {isDiscounted && (
              <div className="flex justify-center items-center gap-2 transform skew-x-3">
                <span className="text-xs font-mono text-red-500">القيمة الأصلية:</span>
                <del className="text-sm font-mono text-gray-500">
                  {originalPrice} {course?.DefaultCurrencyCode}
                </del>
              </div>
            )}

            <span className="text-xs font-mono text-gray-600">القيمة النهائية:</span>
            <div className="flex justify-center items-baseline gap-1">
              <span className="text-2xl font-black text-primary transform skew-x-3">{isFree ? "مجاناً" : currentPrice}</span>
              {!isFree && <span className="text-sm font-semibold text-gray-700 transform skew-x-3">{course?.DefaultCurrencyCode}</span>}
            </div>
          </div>

          {/* الأزرار (أزرار التحكم) */}
          {course?.Isbuy ? (
            <Button className="w-full text-md h-9 font-bold bg-primary hover:bg-primary/90 shadow-lg mt-2" asChild>
              <Link href={`/student/mycourses/${course?.CourseExecutionId}`}>
                <PlayCircle className="w-4 h-4 ml-2" />
                [مشاهدة]
              </Link>
            </Button>
          ) : (
            <>
              <div className="flex w-full gap-2 mt-2">
                {/* زر الشراء */}
                {codePurchaseOnly && (
                  <Button onClick={() => handleBuyCourseNow(course?.CourseExecutionId)} className="flex-1 text-sm h-9 font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
                    <DollarSign className="w-4 h-4 ml-2" />
                    شراء
                  </Button>
                )}

                {/* زر إضافة للسلة */}
                {codePurchaseOnly && (
                  <Button onClick={() => handleAddCourseToCart(course?.CourseExecutionId)} className="flex-1 text-sm h-9 font-bold bg-secondary hover:bg-secondary/90 text-white shadow-md">
                    <ShoppingCart className="w-4 h-4 ml-2" />
                    أضف للمخزون
                  </Button>
                )}
              </div>

              {/* زر تفعيل الكود - خطوة منفصلة */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className={`w-full text-sm h-8 font-bold bg-gray-700 hover:bg-gray-800 text-white shadow-md`}>
                    <Key className="w-4 h-4 ml-2" />
                    [تفعيل الكود]
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white text-gray-900">
                  <DialogHeader>
                    <DialogTitle className="font-ar-medium text-xl">تفعيل الكورس بالكود</DialogTitle>
                    <DialogDescription className="text-gray-500">أدخل كود المقرر الخاص بك في الحقل أدناه لإضافة الكورس لحسابك.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleActivate} className="flex flex-col items-end w-full gap-2">
                    <Input placeholder="أدخل الكود هنا" value={codeValue} onChange={(e) => setCodeValue(e.target.value)} required className="text-right" />
                    <Button className={`mt-2 font-ar-medium transition-opacity ${isLoading ? "opacity-70" : ""}`} disabled={isLoading}>
                      {isLoading ? "جاري التفعيل..." : "تفعيل الكود"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}

export default CourseCard;
