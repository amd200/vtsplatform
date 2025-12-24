import React from "react";
import TitleSection from "../shared/TitleSection";
import { fetcher } from "@/lib/api/fetcher";
import { DashBoardResponse } from "@/types/dashboard.types";
import { Category } from "@/types/common.types";
import CategoriesSlider from "./CategoriesSlider";

async function Categories() {
  const data = await fetcher<DashBoardResponse>(`/platform/Dashboard/AllData`);
  console.log(data)
  const categories = data?.Data?.Categories?.filter((cat: Category) => cat?.Visible && cat?.VisibleOnHome);

  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="التصنيفات" />
        <CategoriesSlider categories={categories || []} />
      </div>
    </section>
  );
}

export default Categories;
