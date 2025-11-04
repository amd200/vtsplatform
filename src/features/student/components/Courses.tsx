"use client";
import CourseCardSkeleton from "@/components/skeletons/CourseCardSkeleton";
import CourseCard from "../../../components/shared/CourseCard";
import TitleSection from "../../../components/shared/TitleSection";
import { Button } from "../../../components/ui/button";
import { useGetAllCoursesQuery, useGetStudentCoursesQuery } from "../services/studentApi";

function Courses({ showAll = true }: { showAll?: boolean }) {
  const { data, isLoading } = useGetAllCoursesQuery();
  const courses = data?.Data;
  return (
    <section className="">
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="كل المقررات" />
          {showAll && <Button>عرض المزيد</Button>}
        </div>
        <div className="content bg-[#f9f9f9] grid lg:grid-cols-3 gap-x-9 gap-y-5 py-7 px-3 rounded">{isLoading ? <CourseCardSkeleton /> : courses?.map((course, index) => <CourseCard key={index} course={course} />)}</div>
      </div>
    </section>
  );
}

export default Courses;
