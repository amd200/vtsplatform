import React from "react";
import TitleSection from "../shared/TitleSection";
import { fetcher } from "@/lib/api/fetcher";
import { StudentCoursesResponse } from "@/features/student/types/student.types";
import CoursesSlider from "./CoursesSlider";
import { DashBoardResponse } from "@/types/dashboard.types";

async function Courses() {
  // const data = await fetcher<DashBoardResponse>(`/platform/Dashboard/AllData`);
  // const courses = data?.Data?.;
  // console.log(data)

  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="المقررات" />
        {/* <CoursesSlider courses={courses || []} /> */}
      </div>
    </section>
  );
}

export default Courses;
