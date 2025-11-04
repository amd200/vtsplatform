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
import { Chapter, Course } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
function ChapterCard({ isPurchased = false, chapter }: { isPurchased?: boolean; chapter: Chapter }) {
  const { openDialog } = useDialog();
  console.log(chapter)
  return (
    <Card className="shadow-none pt-0 gap-0 border-0 font-ar-medium hover:-translate-y-3 transition-transform bg-transparent">
      <div className="relative h-48 w-full rounded overflow-hidden">
        <Link href="#">
          <Image src={`${process.env.NEXT_PUBLIC_FILES_PATH}${chapter.ImageLink}`} alt="Course Image" fill className="object-cover" />
        </Link>
      </div>

      <div className="bg-[#f3f4f6] rounded-lg py-3 mt-[-30px]  z-20 w-[97%] mx-auto">
        <CardHeader className="border-b-">
          <div className="inline-flex w-fit mt-[-24px] gap-x-1 px-2 py-1  bg-primary/90 rounded">
            <div className="bg-white rounded flex px-1 space-x-1 items-center">
              {/* <del className="text-gray-400">1500</del> */}
              <span className="text-sm">{chapter.Price} </span>
            </div>
            {/* <span className="text-white">{chapter.DefaultCurrencyCode}</span> */}
          </div>

          <div className="flex flex-col border-b-2 border-primary pb-3 mb-3">
            <CardTitle>
              <Link href="#" className="text-lg text-primary">
                {chapter.Title}
              </Link>
            </CardTitle>
            <div className={`mt-3 ${!isPurchased ? "grid grid-cols-3" : "flex justify-center"}  gap-x-4`}>
              {}
              {!isPurchased ? (
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
                  <Button className="text-xs h-7" size={"sm"} variant="outline">
                    <ShoppingCart />
                    اضافة للسلة
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/student/video">
                    <Button className="text-xs h-7" size="sm" variant="outline">
                      <PlayCircle />
                      المشاهدة الان
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* <CardDescription>{chapter.Details}</CardDescription> */}
        </CardHeader>

        <CardContent className="flex justify-around text-center border-b rounded-lg overflow-hidden mb-4">
          <div className="flex flex-col items-center justify-center gap-1 py-3">
            <Video className="size-3" />
            <span className="text-xs">{chapter?.NumofLessons} الدروس</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 py-3">
            <Users className="size-3" />
            <span className="text-xs">{chapter.NumofChapters} فصول</span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <CalendarDays className="size-3" />
            <span className="text-xs">{formatDate(chapter.StartDate, "date")}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span className="text-xs">{formatDate(chapter.EndDate, "date")}</span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default ChapterCard;
