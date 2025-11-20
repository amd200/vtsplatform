"use client";
import Courses from "@/features/student/components/Courses";
import { useGetAllCoursesQuery } from "@/features/student/services/studentApi";
import React from "react";

function Page() {
  const { data, isLoading } = useGetAllCoursesQuery();
  return <Courses title="كل المقررات" showAll={false} isLoading={isLoading} courses={data?.Data || []} />;
}

export default Page;
