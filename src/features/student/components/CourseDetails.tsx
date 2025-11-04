import { Chapter, Course } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import { BookOpen, Calendar, Languages, Users } from "lucide-react";
import React from "react";

function CourseDetails({ course }: { course: Course }) {
  console.log(course);
  return (
    <div className="bg-[#f8f8f8] rounded-2xl  p-8 mb-6">
      <h1 className="text-[28px] font-medium text-center mb-8">{course?.Title}</h1>
      {/* Course Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Arabic */}
        <div className="flex items-center justify-center gap-3  ">
          <Languages className="w-5 h-5" />
          {/* <span className="text-base font-normal">{details}</span> */}
        </div>
        {/* Start Date */}
        <div className="flex items-center justify-center gap-3">
          <Calendar className="w-5 h-5" />
          <span className="text-base font-normal">متاح من {formatDate(course?.StartDate, "date")}</span>
        </div>

        {/* End Date */}
        <div className="flex items-center justify-center gap-3">
          <Calendar className="w-5 h-5" />
          <span className="text-base font-normal">الي {formatDate(course?.EndDate, "date")}</span>
        </div>
        {/* Chapters */}
        <div className="flex items-center justify-center gap-3">
          <Users className="w-5 h-5" />
          <span className="text-base font-normal">{course?.ChaptersCount} فصل</span>
        </div>

        {/* Lessons */}
        <div className="flex items-center justify-center gap-3">
          <BookOpen className="w-5 h-5" />
          <span className="text-base font-normal">{course?.LesssonsCount} درس</span>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
