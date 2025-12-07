import React from "react";
import TitleSection from "../shared/TitleSection";
import { fetcher } from "@/lib/api/fetcher";
import { StudentCoursesResponse } from "@/features/student/types/student.types";
import CoursesSlider from "./CoursesSlider";

async function Courses() {
  const data = await fetcher<StudentCoursesResponse>(`/platform/AllCourses`);
  const courses = data?.Data;

  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="المقررات" />
        <CoursesSlider courses={courses || []} />
      </div>
    </section>
  );
}

export default Courses;
