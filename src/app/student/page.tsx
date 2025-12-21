"use client";
import { Chart } from "@/features/student/components/Chart";
import MyCourses from "@/features/student/components/MyCourses";
import MySchedule from "@/features/student/components/MySchedule";
import MySessions from "@/features/student/components/MySessions";
import MyPayments from "@/features/student/components/MyPayments";
import SuggestedCourses from "@/features/student/components/SuggestedCourses";
import React, { useEffect, useState } from "react";
import MyExamResults from "@/features/student/components/MyExamResults";
import { useSession } from "next-auth/react";
import { useGetDashboardDataQuery } from "@/services/dashboardApi";
import { useGetStudentExamsResutlsQuery } from "@/features/student/services/studentApi";
import { ExamResult } from "@/features/student/types/student.types";
import Courses from "@/features/student/components/Courses";
import { Statistics } from "@/types/dashboard.types";
import { useTranslation } from "react-i18next";

function Page() {
  const { data, isLoading, error } = useGetDashboardDataQuery();
  const { t } = useTranslation("student");
  return (
    <main className="py-8 space-y-20 font-ar-medium">
      <Chart statistics={data?.Data?.Statistics || ({} as Statistics)} />
      <Courses link="/student/mycourses" title="اخر ما تم مشاهدته" isLoading={isLoading} courses={data?.Data?.CourseViewed || []} />
      <Courses title="مقررات مقترحة" isLoading={isLoading} courses={data?.Data?.SuggestedCourses || []} />
      <MyExamResults isLoading={isLoading} results={data?.Data?.StudentExamsResults || []} />
      <MyPayments payments={data?.Data?.LastPayments ?? []} />
      <MySessions isLoading={isLoading} sessions={data?.Data.UserSessions ?? []} />
    </main>
  );
}

export default Page;
