import TitleSection from "@/components/shared/TitleSection";
import CartCourses from "@/features/student/components/CartCourses";
import React from "react";

function page() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="إتمام عملية الشراء" />
        </div>
        <CartCourses />
      </div>
    </section>
  );
}

export default page;
