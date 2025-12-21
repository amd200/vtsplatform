import { formatDate } from "@/utils/formatDate";
import { BookOpen, Calendar, Languages, Users } from "lucide-react";
import React from "react";

type CourseDetailsInfo = {
  title: string;
  startDate: string;
  endDate: string;
  chaptersCount?: number;
  lessonsCount?: number;
  language?: string;
};

function CourseDetails({ course }: { course: CourseDetailsInfo }) {
  const infoItems = [course.language && "language", course.startDate && "startDate", course.endDate && "endDate", course.chaptersCount !== undefined && "chaptersCount", course.lessonsCount !== undefined && "lessonsCount"].filter(Boolean);
  const columnsCount = infoItems.length;

  return (
    <div className="bg-[#f8f8f8] rounded-2xl p-8 mb-6">
      <h1 className="text-[28px] font-medium text-center mb-8">{course.title}</h1>

      <div className={`grid grid-cols-1 gap-6 md:grid-cols-${columnsCount}`}>
        {course?.language && (
          <div className="flex items-center justify-center gap-3">
            <Languages className="w-5 h-5" />
          </div>
        )}

        <div className="flex items-center justify-center gap-3">
          <Calendar className="w-5 h-5" />
          <span className="text-base font-normal">متاح من {formatDate(course.startDate, "date")}</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Calendar className="w-5 h-5" />
          <span className="text-base font-normal">الي {formatDate(course.endDate, "date")}</span>
        </div>

        {course?.chaptersCount && (
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5" />
            <span className="text-base font-normal">{course.chaptersCount} فصل</span>
          </div>
        )}

        {course?.lessonsCount && (
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-base font-normal">{course.lessonsCount} درس</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
