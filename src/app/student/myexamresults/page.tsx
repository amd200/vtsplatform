"use client";
import MyExamResults from "@/features/student/components/MyExamResults";
import { useGetStudentExamsResutlsQuery } from "@/features/student/services/studentApi";
import React, { useEffect } from "react";

function Page() {
  const { data, isLoading } = useGetStudentExamsResutlsQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <MyExamResults isLoading={isLoading} results={data?.Data || []} showAll={false} />;
}

export default Page;
