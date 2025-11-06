"use client";
import TitleSection from "@/components/shared/TitleSection";
import MyWallet from "@/features/student/components/MyWallet";
import { useGetStudentWalletQuery } from "@/features/student/services/studentApi";
import React from "react";

function Page() {
  const { data, isLoading } = useGetStudentWalletQuery();

  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="محفظتي" />
        </div>
        <MyWallet charges={data?.Data?.StudentCharges || []} isLoading={isLoading} />
      </div>
    </section>
  );
}

export default Page;
