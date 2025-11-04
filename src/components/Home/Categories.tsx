import React from "react";
import CourseCard from "../shared/CourseCard";
import TitleSection from "../shared/TitleSection";
import CategoryCard from "../shared/CategoryCard";

function Categories() {
  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="التصنيفات" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-9 gap-y-5">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
}

export default Categories;
