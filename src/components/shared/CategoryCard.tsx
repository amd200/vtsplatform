"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, Facebook, File, Key, PlayCircle, ShoppingCart, StickyNote, Users, Video, DollarSign, Layers, BookOpen } from "lucide-react";
import { snow } from "@/assets/images";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BaseResponse, Category } from "@/types/common.types";
import { useState } from "react";
import { Input } from "../ui/input";
import { useActivateCodeMutation } from "@/features/student/services/studentApi";
import { toast } from "react-toastify";

function CategoryCard({ category }: { category: Category }) {
  const [activateCode, { isLoading }] = useActivateCodeMutation();
  const [codeValue, setCodeValue] = useState("");

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

  const isSellable = category?.Sell;
  const priceDisplay = category?.Price > 0 ? category?.Price : "مجاناً";
  const currencyDisplay = category?.CurrencyCode;

  return (
    <Card className="relative shadow-lg pt-0 gap-0 border-4 border-white transition-all duration-300 rounded-lg bg-white hover:border-primary/50 overflow-hidden">
      {/* 1. قسم الصورة (مع إطار حولها) */}
      <div className="relative h-44 w-full overflow-hidden border-b border-gray-200">
        <Link href="#">
          <Image src={category?.ImageLink ? `${process.env.NEXT_PUBLIC_BASE_URL}${category.ImageLink}` : "https://vedu-demo.vtsitco.com/assets/images/noimage.jpg"} alt="Category Image" fill className="object-cover" />
        </Link>

        {/* شارة السعر المائلة (Geometric Skewed Tag) */}
        <div className="absolute top-4 right-0 z-10 py-1 pl-4 pr-6 bg-secondary/90 rounded-l-full shadow-lg flex items-center gap-1 transform skew-y-1">
          <DollarSign className="w-4 h-4 text-white fill-white transform -skew-y-1" />
          <span className="text-sm font-bold text-white transform -skew-y-1">{priceDisplay}</span>
          {category?.Price > 0 && <span className="text-xs text-white/90 transform -skew-y-1">{currencyDisplay}</span>}
        </div>
      </div>
      {/* 2. قسم المحتوى الرئيسي */}
      <div className="p-4 pb-0 relative z-10">
        {/* العنوان (مع إطار خفيف) */}
        <CardHeader className="p-0 mb-3 pb-2 border border-gray-300 rounded-md p-2">
          <CardTitle>
            <Link href="#" className="text-base font-bold text-gray-900 hover:text-primary transition-colors line-clamp-2">
              {category?.NameAr}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs text-gray-600 mt-1 line-clamp-2">{category?.Details || "مجموعة من المقررات التعليمية المتميزة في هذا القسم."}</CardDescription>
        </CardHeader>

        {/* شريط الإحصائيات (Metadata Bar) */}
        <CardContent className="p-0 pt-3 flex justify-between items-center border-t border-gray-100">
          {/* عدد المقررات */}
          <div className="flex items-center gap-1 text-gray-600">
            <Layers className="size-4 text-primary" />
            <span className="text-xs font-semibold">{category?.CoursesCount} مقرر</span>
          </div>

          {/* أيقونات إضافية */}
          <div className="flex items-center gap-2 text-gray-600">
            <div className="flex items-center gap-1">
              <Video className="size-4 text-primary/80" />
              <span className="text-xs">فيديوهات</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="size-4 text-primary/80" />
              <span className="text-xs">مذكرات</span>
            </div>
          </div>
        </CardContent>

        {/* 3. شريط الإجراءات (Actions) - أزرار عمودية ومتباعدة */}
        <CardFooter className="flex flex-col gap-2 p-0 pt-4">
          {isSellable && (
            <div className={`grid grid-cols-3 gap-x-2 w-full`}>
              <Button className="text-sm h-9 font-bold bg-primary hover:bg-primary/90 shadow-lg" size={"sm"} asChild>
                <Link href="#">
                  <PlayCircle className="w-4 h-4 ml-1" />
                  اشترك
                </Link>
              </Button>

              <Button className="text-sm h-9 font-bold bg-secondary hover:bg-secondary/90 shadow-lg" size={"sm"}>
                <ShoppingCart className="w-4 h-4 ml-1" />
                السلة
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="text-xs h-8 font-bold bg-gray-700 hover:bg-gray-800 shadow-md">
                    <Key className="w-3 h-3 ml-1" />
                    كود التفعيل
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white text-gray-900">
                  <DialogHeader>
                    <DialogTitle className="font-ar-medium">ادخل كود المقرر</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleActivate} className="flex flex-col items-end w-full gap-2">
                    <Input placeholder="الكود" value={codeValue} onChange={(e) => setCodeValue(e.target.value)} required className="text-right" />
                    <Button className={`mt-2 font-ar-medium ${isLoading ? "opacity-70" : ""}`} disabled={isLoading}>
                      {isLoading ? "جاري التفعيل..." : "تفعيل"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          )}
          <div className="w-full grid grid-cols-2 gap-x-2 mt-1">
            {/* زر تفعيل الكود */}

            {/* زر المشاركة */}
            {/* <FacebookShareButton url={typeof window !== "undefined" ? window.location.href : "https://example.com"} title={`قسم مميز: ${category?.NameAr}`} hashtag="#كورسات_أونلاين">
              <Button variant="outline" className="text-xs h-8 font-bold border-gray-300 text-gray-600 hover:bg-gray-100 w-full">
                <Facebook className="w-3 h-3 ml-1" />
                شارك الآن
              </Button>
            </FacebookShareButton> */}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default CategoryCard;
