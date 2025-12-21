"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, ShoppingCart, BookOpen, Tag, DollarSign, FileText, Globe, CheckCircle } from "lucide-react";
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

  return (
    <Card className="shadow-xl relative pt-0 pb-0 gap-0 border border-gray-200 transition-all duration-300 rounded-2xl bg-white hover:shadow-primary/20">
      {/* 1. قسم الصورة (مع إطار أيقونة علوي) */}
      <div className="relative h-48 w-full rounded-t-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
        {book?.ImageLink && (
          <Link href="#" className="block w-full h-full">
            <Image src={book?.ImageLink ? `${process.env.NEXT_PUBLIC_BASE_URL}${book?.ImageLink}` : "https://vedu-demo.vtsitco.com/assets/images/noimage.jpg"} alt="Book Cover" fill className="object-cover transition-transform duration-500 hover:scale-105" />
          </Link>
        )}

        {/* شارة "محتوى موثوق" علوية */}
        {/* <div className="absolute top-3 right-3 p-1 bg-primary rounded-full shadow-md">
          <CheckCircle className="w-5 h-5 text-white fill-white" />
        </div> */}
      </div>

      {/* 2. قسم المحتوى الرئيسي */}
      <div className="py-4 px-5 relative z-10">
        {/* العنوان والوصف */}
        <CardHeader className="p-0 mb-3">
          <CardTitle>
            <Link href="#" className="text-xl font-bold text-gray-800 hover:text-primary transition-colors line-clamp-2">
              {book?.Title}
            </Link>
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 mt-1 line-clamp-2">{book?.Detials || "تفاصيل الكتاب غير متوفرة حالياً."}</CardDescription>
        </CardHeader>

        {/* 3. شريط المعلومات (دوائر الأيقونات) */}
        <CardContent className="flex justify-around items-center text-center border-t border-b border-gray-200 py-3 mt-3 mb-4 px-0">
          {/* أيقونة الكتاب (BookOpen) */}
          <div className="flex flex-col items-center gap-1">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
              <BookOpen className="size-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-gray-600">طبعة ورقية</span>
          </div>

          {/* أيقونة المحتوى (FileText) */}
          <div className="flex flex-col items-center gap-1">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
              <FileText className="size-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-gray-600">محتوى شامل</span>
          </div>

          {/* أيقونة التغطية (Globe) */}
          <div className="flex flex-col items-center gap-1">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
              <Globe className="size-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-gray-600">تغطية كاملة</span>
          </div>
        </CardContent>

        {/* 4. قسم الأزرار والسعر (السعر المركزي) */}
        <CardFooter className="p-0 flex flex-col w-full gap-2">
          {/* عرض السعر في المنتصف كعنصر رئيسي */}
          <div className="w-full text-center py-1">
            {book?.DefaultPriceDiscounted && book?.DefaultPriceDiscounted < book?.DefaultPrice && (
              <del className="text-gray-400 text-sm">
                {book?.DefaultPrice} {book?.DefaultCurrencyCode}
              </del>
            )}
            <div className="flex justify-center items-baseline gap-1 mt-1">
              <span className="text-3xl font-black text-primary">{isFree ? "مجاناً" : currentPrice}</span>
              {!isFree && <span className="text-lg font-semibold text-gray-700">{book?.DefaultCurrencyCode}</span>}
            </div>
          </div>

          {/* الأزرار (أزرار جانبية ثانوية) */}
          <div className="flex w-full gap-2 mt-2">
            <Button onClick={() => handleBuyCourseNow(book?.Id)} className="flex-1 text-sm h-10 font-bold bg-primary hover:bg-primary/90 shadow-md">
              <DollarSign className="w-4 h-4 ml-2" />
              شراء مباشر
            </Button>

            <Button onClick={() => handleAddBookToCart(book?.Id)} className="flex-1 text-sm h-10 font-bold bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 shadow-none">
              <ShoppingCart className="w-4 h-4 ml-2" />
              أضف للسلة
            </Button>
          </div>

          {/* تاريخ النشر كخط سفلي هادئ */}
          <div className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center gap-2">
            <CalendarDays className="w-3 h-3" />
            تاريخ النشر: {formatDate(book?.PublishFrom, "date")}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default BookCard;
