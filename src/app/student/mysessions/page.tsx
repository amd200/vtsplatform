"use client";
import MySessions from "@/features/student/components/MySessions";
import { useGetStudentSessionsQuery } from "@/features/student/services/studentApi";

function Page() {
  const { data, isLoading } = useGetStudentSessionsQuery();
  console.log(data);
  return <MySessions isLoading={isLoading} sessions={data?.Data || []} showAll={false} />;
}

export default Page;
