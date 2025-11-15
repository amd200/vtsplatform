"use client";
import { Chart } from "@/features/student/components/Chart";
import MyCourses from "@/features/student/components/MyCourses";
import MySchedule from "@/features/student/components/MySchedule";
import MySessions from "@/features/student/components/MySessions";
import MyPayments from "@/features/student/components/MyPayments";
import SuggestedCourses from "@/features/student/components/SuggestedCourses";
import React, { useEffect } from "react";
import MyExamResults from "@/features/student/components/MyExamResults";
import { useSession } from "next-auth/react";
import { useGetDashboardDataQuery } from "@/services/dashboardApi";
import { useGetStudentExamsResutlsQuery } from "@/features/student/services/studentApi";
import { ExamResult } from "@/features/student/types/student.types";

function Page() {
  const { data, isLoading, error } = useGetDashboardDataQuery();
  console.log(data);
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <main className="py-8 space-y-20 font-ar-medium">
      <Chart />
      {/* <MyCourses /> */}
      {/* <SuggestedCourses /> */}
      <MyExamResults isLoading={isLoading} results={data?.Data?.StudentExamsResults || []} />
      <MyPayments />
      <MySessions isLoading={isLoading} sessions={data?.Data.UserSessions ?? []} />
    </main>
  );
}

export default Page;
