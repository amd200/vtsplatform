import React from "react";
import CourseCard from "../../../components/shared/CourseCard";
import TitleSection from "../../../components/shared/TitleSection";
import { Button } from "../../../components/ui/button";

function SuggestedCourses() {
  return (
    <section className="">
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="مقررات مقترحة" />
          <Button>عرض المزيد</Button>
        </div>

        <div className="content bg-[#f9f9f9] grid lg:grid-cols-3 gap-x-9 gap-y-5 py-7 px-3 rounded">
          {/* <CourseCard />
          <CourseCard />
          <CourseCard /> */}
        </div>
      </div>
    </section>
  );
}

export default SuggestedCourses;
