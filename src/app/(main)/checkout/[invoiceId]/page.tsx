import TitleSection from "@/components/shared/TitleSection";
import CartCourses from "@/features/student/components/CartCourses";
import React, { use } from "react";

export default async function Page({ params }: { params: Promise<{ invoiceId: string }> }) {
  const { invoiceId } = await params;
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="إتمام عملية الشراء" />
        </div>
        <CartCourses invoiceId={invoiceId} />
      </div>
    </section>
  );
}
