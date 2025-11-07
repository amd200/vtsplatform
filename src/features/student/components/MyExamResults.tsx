import TitleSection from "@/components/shared/TitleSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExamResult } from "../types/student.types";
import RowSkeleton from "./skeletons/RowSkeleton";

interface MyExamResultsProps {
  showAll?: boolean;
  results: ExamResult[];
  isLoading?: boolean;
}

function MyExamResults({ showAll = true, results, isLoading = false }: MyExamResultsProps) {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="نتائج امتحاناتي" />
          {showAll && <Button>عرض المزيد</Button>}
        </div>
        <div className="content bg-[#f9f9f9] py-7 px-3 rounded space-y-5">
          {isLoading ? (
            <RowSkeleton rows={10} colsPerRow={4} />
          ) : (
            results.map((result: ExamResult, idx: number) => (
              <div key={idx} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2 font-medium">
                <div className="flex gap-1">
                  <span>اسم المقرر :</span>
                  <span className="font-normal">{result?.CourseName}</span>
                </div>
                <div className="flex gap-1">
                  <span>اسم الفصل :</span>
                  <span className="font-normal">{result?.ChapterName}</span>
                </div>
                <div className="flex gap-1">
                  <span>اسم الامتحان :</span>
                  <span className="font-normal">{result?.LessonName}</span>
                </div>
                <div className="flex gap-1">
                  <span>النتيجة :</span>
                  <span className="font-normal">
                    {result?.Grade}/{result?.studentgrade}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MyExamResults;
