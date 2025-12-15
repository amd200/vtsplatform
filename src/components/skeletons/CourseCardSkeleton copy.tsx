"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { DollarSign } from "lucide-react";
import { CardContent, CardFooter, CardHeader } from "../ui/card";

interface CourseCardSkeletonProps {
  showButtons?: boolean;
  count?: number;
}

export default function CourseCardSkeleton({ showButtons = true, count = 5 }: CourseCardSkeletonProps) {
  return (
    <>
      {" "}
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="shadow-2xl relative pt-0 gap-0 border-4 border-gray-900 bg-[#F0F0F0] rounded-none animate-pulse overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0_95%)]">
          {/* 1. الشريط العلوي (Status Bar) */} 
          <div className="w-full h-8 bg-gray-900 flex justify-between items-center px-3 border-b-2 border-secondary/50">
            <Skeleton className="h-3 w-20 bg-gray-700 rounded-sm" />
            <Skeleton className="h-3 w-24 bg-gray-700 rounded-sm" /> 
          </div>
          {/* 2. Image Placeholder (واجهة اللعبة) */} <div className="relative h-56 w-full bg-gray-200 flex flex-col items-center justify-center border-b-4 border-secondary"> {/* Mock image content space */} </div> {/* 3. قسم المحتوى الرئيسي */} 
          <div className="py-4 px-5 relative z-10">
            {/* العنوان والوصف */}
            <CardHeader className="p-0 mb-3 border-b border-gray-300 pb-2">
              <Skeleton className="h-6 w-3/4 font-extrabold rounded-sm" />
              <Skeleton className="h-4 w-full mt-2 rounded-sm" />
              <Skeleton className="h-4 w-1/2 mt-1 rounded-sm" />
            </CardHeader>
            {/* 4. شريط البيانات/الخصائص (Stats Bar) - 3 أعمدة */}
            <CardContent className="flex justify-between items-start text-center py-3 px-0">
              {/* الدروس */}
              <div className="flex flex-col items-center gap-1 text-gray-700">
                  <Skeleton className="h-4 w-16 bg-gray-300 rounded-sm" />
              </div>
              {/* تاريخ البدء */}
              <div className="flex flex-col items-center gap-1 text-gray-700">
                  <Skeleton className="h-4 w-16 bg-gray-300 rounded-sm" />
              </div>
              {/* تاريخ الانتهاء */}
              <div className="flex flex-col items-center gap-1 text-gray-700">
                  <Skeleton className="h-4 w-16 bg-gray-300 rounded-sm" />
              </div>
            </CardContent>
            {/* 5. قسم الأزرار والسعر (وحدة الدفع/الـ Loot) */}
            <CardFooter className="p-0 flex flex-col w-full gap-2 border-t border-gray-300 pt-3">
              {/* عرض السعر المركزي المائل */} 
              <div className="w-full text-center py-3 bg-white border border-primary/50 rounded-sm transform -skew-x-3">
                <div className="flex justify-center items-baseline gap-1 transform skew-x-3">
                  <Skeleton className="h-6 w-20 bg-primary/70 rounded-sm" />
                </div>
                 
              </div>
                {/* الأزرار (أزرار التحكم) */} 
              {showButtons && (
                <>
                  <div className="flex w-full gap-2 mt-2">
                    {/* زر الشراء */}
                    <Skeleton className="flex-1 h-10 bg-primary/70 rounded-sm shadow-md" /> {/* زر إضافة للسلة */}
                    <Skeleton className="flex-1 h-10 bg-secondary/70 rounded-sm shadow-md" />
                  </div>
                  {/* زر تفعيل الكود */}
                  <Skeleton className="w-full h-9 bg-gray-700/70 rounded-sm shadow-md mt-2" />
                </>
              )}
            </CardFooter>
             
          </div>
        </div>
      ))}{" "}
    </>
  );
}
