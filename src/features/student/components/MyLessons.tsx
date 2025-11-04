import TitleSection from "@/components/shared/TitleSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExamResult } from "../types/student.types";
import { Lesson } from "@/types/common.types";
import { Eye } from "lucide-react";
import Link from "next/link";
function MyLessons({ showAll = true, lessons }: { showAll?: boolean; lessons: Lesson[] }) {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="دروسي" />
          {showAll && <Button>عرض المزيد</Button>}
        </div>
        <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
          {lessons &&
            lessons.length > 0 &&
            lessons.map((lesson: Lesson, index) => (
              <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
                <div className="flex gap-1">
                  <span>اسم الدرس :</span>
                  <span className="font-normal">{lesson?.Title}</span>
                </div>
                <div className="flex gap-1">
                  <span>مدة الدرس :</span>
                  <span className="font-normal">{lesson?.time} دقائق</span>
                </div>
                <div className="flex gap-1">
                  <Link href={"/"}>
                    <Eye />
                  </Link>
                  {/* <span>اسم الامتحان :</span>
                  <span className="font-normal">{lesson?.LessonName}</span> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MyLessons;
