"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, File, Key, PlayCircle, ShoppingCart, StickyNote, Users, Video } from "lucide-react";
import { useDialog } from "@/context/DialogContext";
// import { DialogHeader } from "../ui/dialog";
// import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";
import { BaseResponse, Course } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import { useAddCourseToCartMutation } from "@/features/student/services/cartApi";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { snow } from "@/assets/images";
import { useBuyCourseMutation } from "@/features/student/services/paymentApi";
import { useRouter } from "next/navigation";
function CourseCard({ course }: { course: Course }) {
  const { openDialog } = useDialog();
  const [addCourseToCart] = useAddCourseToCartMutation();
  const [buyCourse, { data }] = useBuyCourseMutation();
  const codePurchaseOnly = !course?.Possibilityimplementationcodesonly;
  const router = useRouter();
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
      console.log(id);
      const res = await buyCourse(id).unwrap();
      console.log("x", res);
      router.push(`/checkout/${res?.Data?.InvoiceData?.Id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="shadow-none relative pt-0 gap-0 border-0 font-ar-medium hover:-translate-y-3 transition-transform bg-transparent">
      <Image src={snow} alt="snow" className="absolute h-[50px] top-[-30px] z-5" />
      <div className="relative h-48 w-full rounded overflow-hidden">
        {course?.ImageLink && (
          <Link href="#">
            <Image src={`${process.env.NEXT_PUBLIC_FILES_PATH}${course?.ImageLink}`} alt="Course Image" fill className="object-cover" />
          </Link>
        )}
      </div>

      <div className="bg-[#f3f4f6] rounded-lg py-3 mt-[-30px]  z-20 w-[97%] mx-auto">
        <CardHeader className="border-b-">
          <div className="inline-flex w-fit mt-[-24px] gap-x-1 px-2 py-1  bg-primary/90 rounded">
            <div className="bg-white rounded flex px-1 space-x-1 items-center">
              {course?.Discount > 0 && <del className="text-gray-400 ">{course?.Price} </del>}
              <span className="text-sm ">{course?.Discount > 0 ? course?.Price - course?.Discount : course?.Price > 0 ? course?.Price : "مجانا"}</span>{" "}
            </div>

            {course?.Price > 0 && <span className="text-white">{course?.DefaultCurrencyCode}</span>}
          </div>

          <div className="flex flex-col border-b-2 border-primary pb-3 mb-3">
            <CardTitle>
              <Link href="#" className="text-lg text-primary">
                {course?.Title}
              </Link>
            </CardTitle>
            <div className={`mt-3 ${!course?.Isbuy ? (codePurchaseOnly ? "grid grid-cols-3" : "flex justify-center") : "flex justify-center"}  gap-x-4`}>
              {}
              {course?.Isbuy ? (
                <>
                  <Button className="text-xs h-7" size="sm" variant="outline" asChild>
                    <Link href={`/student/mycourses/${course?.CourseExecutionId}`}>
                      <PlayCircle />
                      المشاهدة الان
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  {codePurchaseOnly && (
                    <Button onClick={() => handleBuyCourseNow(course?.CourseExecutionId)} className="text-xs h-7" size={"sm"} variant="outline">
                      <PlayCircle />
                      اشترك الان
                    </Button>
                  )}

                  <Dialog>
                    <DialogTrigger>
                      <Button className="text-xs h-7" size={"sm"} variant="outline">
                        <Key />
                        شراء بكود
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-ar-medium">ادخل كود المقرر</DialogTitle>
                      </DialogHeader>
                      <form className="flex flex-col  items-end">
                        <Input placeholder="الكود" />
                        <Button className="mt-2 font-ar-medium">تفعيل</Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  {codePurchaseOnly && (
                    <Button onClick={() => handleAddCourseToCart(course?.CourseExecutionId)} className="text-xs h-7" size={"sm"} variant="outline">
                      <ShoppingCart />
                      اضافة للسلة
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>

          <CardDescription>{course?.Details}</CardDescription>
        </CardHeader>

        <CardContent className="flex justify-around text-center border-b rounded-lg overflow-hidden mb-4">
          <div className="flex flex-col items-center justify-center gap-1 py-3">
            <Video className="size-3" />
            <span className="text-xs">{course?.LesssonsCount} الدروس</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 py-3">
            <Users className="size-3" />
            <span className="text-xs">{course?.ChaptersCount} فصول</span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <CalendarDays className="size-3" />
            <span className="text-xs">{formatDate(course?.StartDate, "date")}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span className="text-xs">{formatDate(course?.EndDate, "date")}</span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default CourseCard;
