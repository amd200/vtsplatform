import React from "react";
import CourseCard from "../shared/CourseCard";
import TitleSection from "../shared/TitleSection";
import CategoryCard from "../shared/CategoryCard";
import { fetcher } from "@/lib/api/fetcher";
import { StudentCoursesResponse } from "@/features/student/types/student.types";
import { DashBoardResponse } from "@/types/dashboard.types";
import { Category } from "@/types/common.types";

async function Categories() {
  const data = await fetcher<DashBoardResponse>(`/platform/Dashboard/AllData`);
  const categories = data?.Data?.Categories.filter((cat: Category) => cat?.Visible && cat?.VisibleOnHome);
  console.log(data?.Data?.Categories);
  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="التصنيفات" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-9 gap-y-5">{categories && categories?.map((cat: Category) => <CategoryCard key={cat?.Id} category={cat} />)}</div>
      </div>
    </section>
  );
}

export default Categories;
