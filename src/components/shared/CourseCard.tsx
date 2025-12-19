"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CalendarDays, Key, PlayCircle, Users, Video, ArrowRight } from "lucide-react";
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
  const [addCourseToCart] = useAddCourseToCartMutation();
  const [buyCourse] = useBuyCourseMutation();
  const [activateCode, { isLoading }] = useActivateCodeMutation();
  const [codeValue, setCodeValue] = useState("");
  const router = useRouter();

  const codePurchaseOnly = !course?.Possibilityimplementationcodesonly;
  const isFree = course?.Price <= 0;
  const currentPrice = course?.Discount > 0 ? course?.Price - course?.Discount : course?.Price;
  const isDiscounted = course?.Discount > 0 && course?.Price > 0;

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await activateCode(codeValue).unwrap();
      if (res.Data?.IsTheTargetActivated) {
        toast.success("تم التفعيل بنجاح");
        setCodeValue("");
      } else {
        toast.error(res.Data?.Message || "هذا الكود غير صحيح");
      }
    } catch (error) {
      const err = error as BaseResponse<unknown>;
      toast.error(err.Message || "حدث خطأ أثناء التفعيل");
    }
  };

  const handleAddCourseToCart = async (id: string) => {
    try {
      await addCourseToCart({ Id: id }).unwrap();
      toast.success("تمت الإضافة للسلة");
    } catch (error: any) {
      toast.error(error?.data?.Message || "فشل في الإضافة");
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

  return (
    <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
      {/* قسم الصورة */}
      <div className="relative h-48 w-full overflow-hidden">
        {course?.ImageLink ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_FILES_PATH}${course?.ImageLink}`}
            alt={course?.Title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <Video className="w-12 h-12 text-slate-300" />
          </div>
        )}
        {/* Badge الخصم */}
        {isDiscounted && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            وفر {( (course.Discount / course.Price) * 100 ).toFixed(0)}%
          </div>
        )}
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-bold text-slate-800 line-clamp-1 hover:text-primary transition-colors">
            <Link href={`/student/mycourses/${course?.CourseExecutionId}`}>{course?.Title}</Link>
          </CardTitle>
        </div>
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed min-h-[40px]">
          {course?.Details || "استكشف محتوى الدورة وابدأ رحلة التعلم الخاصة بك اليوم."}
        </p>
      </CardHeader>

      <CardContent className="p-4">
        {/* إحصائيات سريعة */}
        <div className="flex items-center gap-4 text-slate-600 border-y border-slate-50 py-3 mb-4">
          <div className="flex items-center gap-1.5">
            <PlayCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{course?.LesssonsCount} درس</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{course?.ChaptersCount} فصل</span>
          </div>
        </div>

        {/* السعر */}
        <div className="flex items-baseline gap-2">
          {isFree ? (
            <span className="text-xl font-bold text-green-600">مجاني</span>
          ) : (
            <>
              <span className="text-2xl font-bold text-slate-900">{currentPrice}</span>
              <span className="text-xs font-medium text-slate-500">{course?.DefaultCurrencyCode}</span>
              {isDiscounted && (
                <del className="text-sm text-slate-400 mr-1">{course?.Price}</del>
              )}
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        {course?.Isbuy ? (
          <Button className="w-full rounded-xl bg-primary hover:bg-primary/90" asChild>
            <Link href={`/student/mycourses/${course?.CourseExecutionId}`}>
              دخول الدورة
              <ArrowRight className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        ) : (
          <>
            <div className="flex w-full gap-2">
              {codePurchaseOnly && (
                <Button 
                  onClick={() => handleBuyCourseNow(course?.CourseExecutionId)} 
                  className="flex-1 rounded-xl font-semibold"
                >
                  شراء الآن
                </Button>
              )}
              {codePurchaseOnly && (
                <Button 
                  variant="outline"
                  onClick={() => handleAddCourseToCart(course?.CourseExecutionId)} 
                  className="px-3 rounded-xl border-slate-200 hover:bg-slate-50"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              )}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="w-full text-xs text-slate-500 hover:text-primary">
                  <Key className="w-3 h-3 ml-1" />
                  لديك كود تفعيل؟
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px] rounded-3xl">
                <DialogHeader>
                  <DialogTitle className="text-right">تفعيل بواسطة الكود</DialogTitle>
                  <DialogDescription className="text-right">أدخل الكود المطبوع على الكارت الخاص بك</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleActivate} className="space-y-4 pt-4">
                  <Input 
                    placeholder="Ex: XXXX-XXXX-XXXX" 
                    value={codeValue} 
                    onChange={(e) => setCodeValue(e.target.value)} 
                    className="text-center font-mono uppercase"
                  />
                  <Button className="w-full rounded-xl" disabled={isLoading || !codeValue}>
                    {isLoading ? "جاري التحقق..." : "تفعيل الآن"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </>
        )}
      </CardFooter>
    </Card>
  );
}

export default CourseCard;