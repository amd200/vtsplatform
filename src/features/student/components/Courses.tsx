"use client";
import CourseCardSkeleton from "@/components/skeletons/CourseCardSkeleton";
import CourseCard from "../../../components/shared/CourseCard";
import TitleSection from "../../../components/shared/TitleSection";
import { Button } from "../../../components/ui/button";
import { useGetStudentCoursesQuery } from "../services/studentApi";
import { useEffect } from "react";
import { Course } from "@/types/common.types";
import Link from "next/link";

function Courses({ title, link, courses, isLoading, showAll = true, withBackground = true }: { courses: Course[]; link?: string; isLoading: boolean; showAll?: boolean; withBackground?: boolean; title: string }) {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title={title} />
          {showAll && (
            <Button asChild>
              <Link href={link ? link : "/student/courses"}>عرض المزيد</Link>
            </Button>
          )}
        </div>

        <div className={`grid lg:grid-cols-3 gap-x-9 gap-y-5  rounded ` + (withBackground ? "bg-[#f9f9f9] py-7 px-3" : "")}>{isLoading ? <CourseCardSkeleton count={3} /> : courses?.map((course, index) => <CourseCard key={index} course={course} />)}</div>
      </div>
    </section>
  );
}

export default Courses;
