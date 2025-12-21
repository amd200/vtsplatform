import TitleSection from "@/components/shared/TitleSection";
import Payment from "@/features/student/components/Payment";
import React, { use } from "react";

export default async function Page({ params }: { params: Promise<{ invoiceId: string }> }) {
  const { invoiceId } = await params;
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="إتمام عملية الشراء" />
        </div>
        <Payment invoiceId={invoiceId} />
      </div>
    </section>
  );
}
