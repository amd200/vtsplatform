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
import { BaseResponse, Book, Course } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import {  useAddCourseToCartMutation } from "@/features/student/services/cartApi";
import { toast } from "react-toastify";
import { snow } from "@/assets/images";
import { useBuyCourseMutation } from "@/features/student/services/paymentApi";
import { useRouter } from "next/navigation";
import { useActivateCodeMutation } from "@/features/student/services/studentApi";
import { useState } from "react";
import { useAddBookToCartMutation } from "@/features/student/services/cartBooksApi";
function BookCard({ book }: { book: Book }) {
  const { openDialog } = useDialog();
  const [addBookToCart] = useAddBookToCartMutation();
  const [buyCourse, { data }] = useBuyCourseMutation();
  const router = useRouter();
  const handleAddCourseToCart = async (Id: string) => {
    try {
      const res = await addBookToCart({ Id }).unwrap();
      toast.success(res.Message || "تمت الإضافة بنجاح");
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
        {book?.ImageLink && (
          <Link href="#">
            <Image src={book?.ImageLink ? `${process.env.NEXT_PUBLIC_FILES_PATH}${book?.ImageLink}` : "https://vedu-demo.vtsitco.com/assets/images/noimage.jpg"} alt="Category Image" fill className="object-cover" />
          </Link>
        )}
      </div>

      <div className="bg-[#f3f4f6] rounded-lg py-3 mt-[-30px]  z-20 w-[97%] mx-auto">
        <CardHeader className="border-b-">
          <div className="inline-flex w-fit mt-[-24px] gap-x-1 px-2 py-1  bg-primary/90 rounded">
            <div className="bg-white rounded flex px-1 space-x-1 items-center">
              {book?.DefaultPriceDiscounted && <del className="text-gray-400 ">{book?.DefaultPrice} </del>}
              <span className="text-sm ">{book?.DefaultPriceDiscounted > 0 ? book?.DefaultPriceDiscounted : "مجانا"}</span>{" "}
            </div>

            {book?.DefaultPrice > 0 && <span className="text-white">{book?.DefaultCurrencyCode}</span>}
          </div>

          <div className="flex flex-col border-b-2 border-primary pb-3 mb-3">
            <CardTitle>
              <Link href="#" className="text-lg text-primary">
                {book?.Title}
              </Link>
            </CardTitle>
            <div className={`mt-3 grid grid-cols-2  gap-x-4`}>
              <Button onClick={() => handleBuyCourseNow(book?.Id)} className="text-xs h-7" size={"sm"} variant="outline">
                <PlayCircle />
                شراء الان
              </Button>

              <Button onClick={() => handleAddCourseToCart(book?.Id)} className="text-xs h-7" size={"sm"} variant="outline">
                <ShoppingCart />
                اضافة للسلة
              </Button>
            </div>
          </div>

          <CardDescription>{book?.Detials}</CardDescription>
        </CardHeader>

        {/* <CardContent className="flex justify-around text-center border-b rounded-lg overflow-hidden mb-4">
          <div className="flex flex-col items-center justify-center gap-1 py-3">
            <Video className="size-3" />
            <span className="text-xs">{book?.LesssonsCount} الدروس</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 py-3">
            <Users className="size-3" />
            <span className="text-xs">{book?.ChaptersCount} فصول</span>
          </div>
        </CardContent> */}

        <CardFooter className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <CalendarDays className="size-3" />
            <span className="text-xs">{formatDate(book?.PublishFrom, "date")}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span className="text-xs">{formatDate(book?.PublishTo, "date")}</span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default BookCard;
