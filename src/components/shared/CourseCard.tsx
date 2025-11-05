"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, File, Key, PlayCircle, ShoppingCart, StickyNote, Users, Video } from "lucide-react";
import { useDialog } from "@/context/DialogContext";
import { DialogHeader } from "../ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";
import { BaseResponse, Course } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import { useAddCourseToCartMutation } from "@/features/student/services/cartApi";
import { toast } from "react-toastify";
function CourseCard({ course }: { course: Course }) {
  const { openDialog } = useDialog();
  const [addCourseToCart] = useAddCourseToCartMutation();
  const handleAddCourseToCart = async (courseExecutionId: string) => {
    try {
      const res = await addCourseToCart({ Id: courseExecutionId }).unwrap();
      toast.success(res.Message || "تمت إضافة الكورس بنجاح");
    } catch (error) {
      const err = error as BaseResponse;
      toast.error(err.Message || "حدث خطأ، حاول مرة أخرى");
    }
  };

  return (
    <Card className="shadow-none pt-0 gap-0 border-0 font-ar-medium hover:-translate-y-3 transition-transform bg-transparent">
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
              {/* <del className="text-gray-400">1500</del> */}
              <span className="text-sm">{course?.Price > 0 ? course?.Price : "مجانا"} </span>
            </div>

            {course?.Price > 0 && <span className="text-white">{course?.DefaultCurrencyCode}</span>}
          </div>

          <div className="flex flex-col border-b-2 border-primary pb-3 mb-3">
            <CardTitle>
              <Link href="#" className="text-lg text-primary">
                {course?.Title}
              </Link>
            </CardTitle>
            <div className={`mt-3 ${!course?.Isbuy ? "grid grid-cols-3" : "flex justify-center"}  gap-x-4`}>
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
                  <Button className="text-xs h-7" size={"sm"} variant="outline">
                    <PlayCircle />
                    اشترك الان
                  </Button>
                  <Button
                    onClick={() =>
                      openDialog(
                        <>
                          <DialogHeader>
                            <DialogTitle>ادخل كود المقرر</DialogTitle>
                            {/* <DialogDescription>هل أنت متأكد أنك تريد حذف الحساب نهائياً؟</DialogDescription> */}
                          </DialogHeader>
                          <form className="flex flex-col  items-end">
                            <Input placeholder="الكود" />
                            <Button className="mt-2">تفعيل</Button>
                          </form>
                        </>
                      )
                    }
                    className="text-xs h-7"
                    size={"sm"}
                    variant="outline"
                  >
                    <Key />
                    شراء بكود
                  </Button>
                  <Button onClick={() => handleAddCourseToCart(course?.CourseExecutionId)} className="text-xs h-7" size={"sm"} variant="outline">
                    <ShoppingCart />
                    اضافة للسلة
                  </Button>
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
