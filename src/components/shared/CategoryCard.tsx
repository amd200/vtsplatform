"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, File, Key, PlayCircle, ShoppingCart, StickyNote, Users, Video } from "lucide-react";
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
  return (
    <Card className="relative shadow-none pt-0 gap-0 border-0 font-ar-medium hover:-translate-y-3 transition-transform">
      <Image src={snow} alt="snow" className="absolute h-[50px] top-[-30px] z-5" />

      <div className="relative h-48 w-full rounded overflow-hidden">
        <Link href="#">
          <Image src={`${process.env.NEXT_PUBLIC_FILES_PATH}${category?.ImageLink}`} alt="Category Image" fill className="object-cover" />
        </Link>
      </div>

      <div className="bg-[#f3f4f6] rounded-lg py-3 mt-[-30px]  z-20 w-[97%] mx-auto">
        <CardHeader className="border-b-">
          {category?.Sell && (
            <div className="inline-flex w-fit mt-[-24px] gap-x-1 px-2 py-1  bg-primary/90 rounded">
              <div className="bg-white rounded flex px-1 space-x-1 items-center">
                <span className="text-sm ">{category?.Price > 0 ? category?.Price : "مجانا"}</span>
              </div>
              <span className="text-white">جنيهًا</span>
            </div>
          )}

          <div className="flex flex-col border-b-2 border-primary pb-3 mb-3">
            <CardTitle>
              <Link href="#" className="text-lg text-primary">
                {category?.NameAr}
              </Link>
            </CardTitle>
            {category?.Sell && (
              <div className={`mt-3 grid grid-cols-3 gap-x-4`}>
                <Button className="text-xs h-7" size={"sm"} variant="outline">
                  <PlayCircle />
                  اشترك الان
                </Button>
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
                    <form onSubmit={handleActivate} className="flex flex-col items-end w-full">
                      <Input placeholder="الكود" value={codeValue} onChange={(e) => setCodeValue(e.target.value)} required />
                      <Button className={`mt-2 font-ar-medium `} disabled={isLoading ? true : false}>
                        {isLoading ? "جاري التفعيل..." : "تفعيل"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Button className="text-xs h-7" size={"sm"} variant="outline">
                  <ShoppingCart />
                  اضافة للسلة
                </Button>
              </div>
            )}
          </div>
          <CardDescription>{category?.Details}</CardDescription>
        </CardHeader>

        <CardContent className="text-center  rounded-lg overflow-hidden">
          <div className="flex items-center  gap-1 py-3">
            <Users className="size-3" />
            <span className="text-sm">{category?.CoursesCount} مقرر </span>
          </div>
        </CardContent>

        {/* <CardFooter className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <CalendarDays className="size-3" />
            <span className="text-xs">10/09/2024</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span className="text-xs">06/09/2024</span>
          </div>
        </CardFooter> */}
      </div>
    </Card>
  );
}

export default CategoryCard;
