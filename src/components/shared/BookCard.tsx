"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen, DollarSign, FileText, PenTool, TrendingUp } from "lucide-react";
import { Input } from "../ui/input";
import { BaseResponse, Book } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import { useAddBookToCartMutation } from "@/features/student/services/cartBooksApi";
import { toast } from "react-toastify";
import { useBuyCourseMutation } from "@/features/student/services/paymentApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function BookCard({ book }: { book: Book }) {
  const [addBookToCart] = useAddBookToCartMutation();
  const [buyCourse] = useBuyCourseMutation();
  const router = useRouter();

  const handleAddBookToCart = async (Id: string) => {
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
      const res = await buyCourse(id).unwrap();
      router.push(`/checkout/${res?.Data?.InvoiceData?.Id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const isFree = book?.DefaultPriceDiscounted <= 0;
  const currentPrice = book?.DefaultPriceDiscounted;
  const originalPrice = book?.DefaultPrice;
  const isDiscounted = book?.DefaultPriceDiscounted && book?.DefaultPriceDiscounted < book?.DefaultPrice;

  return (
    <Card className="shadow-lg relative pt-0 gap-0 border-2 border-gray-200 transition-all duration-300 rounded-lg bg-white hover:shadow-xl">
      {/* 1. قسم الصورة (خلفية العرض) */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
        {book?.ImageLink && (
          <Link href="#">
            <Image src={book?.ImageLink ? `${process.env.NEXT_PUBLIC_FILES_PATH}${book?.ImageLink}` : "https://vedu-demo.vtsitco.com/assets/images/noimage.jpg"} alt="Book Cover" width={160} height={190} className="object-contain transition-transform duration-500 hover:scale-105" />
          </Link>
        )}
      </div>

      {/* 2. قسم المحتوى الرئيسي */}
      <div className="py-4 px-5 relative z-10">
        {/* العنوان والوصف - خلفية بيضاء صلبة ومميزة */}
        <CardHeader className="p-0 mb-3 border-b-2 border-primary/20 pb-2 bg-white -mt-10 pt-2 px-3 rounded-t-md ">
          <CardTitle>
            <Link href="#" className="text-xl font-extrabold text-gray-900 hover:text-primary transition-colors line-clamp-2">
              {book?.Title}
            </Link>
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 mt-1 line-clamp-2">{book?.Detials || "نظرة متعمقة على المحتوى التعليمي لهذا الكتاب المميز."}</CardDescription>
        </CardHeader>

        {/* 3. شريط البيانات (الورقية) */}
        <CardContent className="flex justify-between items-center text-center border-b border-gray-100 py-3 px-0">
          <div className="flex flex-col items-center gap-1 text-gray-700">
            <BookOpen className="size-4 text-primary/80" />
            <span className="text-xs font-medium">مطبوع</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-gray-700">
            <FileText className="size-4 text-primary/80" />
            <span className="text-xs font-medium">محتوى كامل</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-gray-700">
            <PenTool className="size-4 text-primary/80" />
            <span className="text-xs font-medium">إصدار {new Date(book?.PublishFrom).getFullYear() || "جديد"}</span>
          </div>
        </CardContent>

        {/* 4. قسم السعر والأزرار */}
        <CardFooter className="p-0 flex flex-col w-full gap-2 pt-3">
          {/* وحدة السعر (التركيز على التباين) */}
          <div className="w-full flex justify-between items-baseline py-1">
            <div className="flex flex-col items-start">
              {isDiscounted && (
                <del className="text-sm text-gray-400">
                  {originalPrice} {book?.DefaultCurrencyCode}
                </del>
              )}
              <span className="text-3xl font-black text-primary">{isFree ? "مجاناً" : currentPrice}</span>
              {!isFree && <span className="text-md font-semibold text-gray-700">{book?.DefaultCurrencyCode}</span>}
            </div>

            {/* شارة الخصم أو الجودة */}
            {isDiscounted ? (
              <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-md">خصم!</div>
            ) : (
              <div className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full shadow-md">
                <TrendingUp className="w-3 h-3 inline mr-1" /> متوفر
              </div>
            )}
          </div>

          {/* الأزرار (أزرار خطية وأنيقة) */}
          <div className="flex w-full gap-2 mt-2">
            <Button onClick={() => handleBuyCourseNow(book?.Id)} className="flex-1 text-sm h-10 font-bold border border-primary text-primary bg-white hover:bg-primary/5 shadow-none">
              <DollarSign className="w-4 h-4 ml-2" />
              شراء فوري
            </Button>

            <Button onClick={() => handleAddBookToCart(book?.Id)} className="flex-1 text-sm h-10 font-bold bg-primary text-white hover:bg-primary/90 shadow-md">
              <ShoppingCart className="w-4 h-4 ml-2" />
              أضف للسلة
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default BookCard;
