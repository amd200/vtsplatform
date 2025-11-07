import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, File, Key, PlayCircle, ShoppingCart, StickyNote, Users, Video } from "lucide-react";
import { snow } from "@/assets/images";
function CategoryCard() {
  return (
    <Card className="relative shadow-none pt-0 gap-0 border-0 font-ar-medium hover:-translate-y-3 transition-transform">
            <Image src={snow} alt="snow" className="absolute h-[50px] top-[-30px] z-5" />
      
      <div className="relative h-48 w-full rounded overflow-hidden">
        <Link href="#">
          <Image src="https://vedu-demo.vtsitco.com/Files/Courses/303ec4d7-bef2-4ce1-a6db-18c4390c6852/303ec4d7-bef2-4ce1-a6db-18c4390c6852.jpg" alt="Course Image" fill className="object-cover" />
        </Link>
      </div>

      <div className="bg-[#f3f4f6] rounded-lg py-3 mt-[-30px]  z-20 w-[97%] mx-auto">
        <CardHeader className="border-b-">
          <div className="inline-flex w-fit mt-[-24px] gap-x-1 px-2 py-1  bg-primary/90 rounded">
            <div className="bg-white rounded flex px-1 space-x-1 items-center">
              {/* <del className="text-gray-400">1500</del> */}
              <span className="text-sm">1200 </span>
            </div>
            <span className="text-white">جنيهًا</span>
          </div>

          <div className="flex flex-col border-b-2 border-primary pb-3 mb-3">
            <CardTitle>
              <Link href="#" className="text-lg text-primary">
                شهـر (8) - أولـي ثانـوي
              </Link>
            </CardTitle>
            <div className="mt-3 grid grid-cols-3 gap-x-4">
              <Button className="text-xs h-7" size={"sm"} variant="outline">
                <PlayCircle />
                اشترك الان
              </Button>
              <Button className="text-xs h-7" size={"sm"} variant="outline">
                <Key />
                شراء بكود
              </Button>
              <Button className="text-xs h-7" size={"sm"} variant="outline">
                <ShoppingCart />
                اضافة للسلة
              </Button>
            </div>
          </div>
          <CardDescription>محـتوي شهـر (8) - لطـلاب أولـي ثانـوي</CardDescription>
        </CardHeader>

        <CardContent className="text-center  rounded-lg overflow-hidden">
          <div className="flex items-center  gap-1 py-3">
            <Users className="size-3" />
            <span className="text-sm">2 فصول</span>
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
