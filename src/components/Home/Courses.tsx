import React from "react";
import CourseCard from "../shared/CourseCard";
import TitleSection from "../shared/TitleSection";
import { fetcher } from "@/lib/api/fetcher";
import { StudentCoursesResponse } from "@/features/student/types/student.types";

async function Courses() {
  const data = await fetcher<StudentCoursesResponse>(`/api/platform/AllCourses`);
  const courses = data?.Data;
  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="المقررات" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-9 gap-y-5">
          {courses?.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
