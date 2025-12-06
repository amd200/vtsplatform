"use client"
import TitleSection from "@/components/shared/TitleSection";
import Cart from "@/features/student/components/Cart";
import { useGetStudentCartBooksQuery } from "@/features/student/services/cartBooksApi";
import React, { useEffect } from "react";

function page() {
const {data} = useGetStudentCartBooksQuery()
useEffect(()=>{
    console.log(data)
},[data])
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="سلة مشتريات الكتب" />
        </div>
        <Cart cartBooks={data?.Data} />
      </div>
    </section>
  );
}

export default page;
