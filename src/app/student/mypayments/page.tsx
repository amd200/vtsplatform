"use client";
import MyPayments from "@/features/student/components/MyPayments";
import { useGetStudentPayementsQuery } from "@/features/student/services/studentApi";
import React from "react";

function Page() {
  const { data, isLoading } = useGetStudentPayementsQuery();
  return <MyPayments payments={data?.Data ?? []} showAll={false} />;
}

export default Page;
