"use client";
import TitleSection from "@/components/shared/TitleSection";
import React from "react";
import { useGetStudentCartQuery } from "../services/cartApi";
import { formatDate } from "@/utils/formatDate";

function CartCourses() {
  const { data } = useGetStudentCartQuery();
  const cartCaourses = data?.Data;
  console.log(cartCaourses);
  return (
    <section className="">
      <div className="container ">
        <div className="flex items-center justify-between">
          <TitleSection title="سلة مشتريات المقررات" />
        </div>
        <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
          {cartCaourses?.map((cartCourse, index) => (
            <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
              {/* Item */}
              <div className="flex gap-1">
                <span>الاسم :</span>
                <span className="font-normal">{cartCourse?.Title}</span>
              </div>
              <div className="flex gap-1">
                <span>تاريخ الاضافة :</span>
                <span className="font-normal">{formatDate(cartCourse?.AddedDate)}</span>
              </div>
              <div className="flex gap-1">
                <span>السعر :</span>
                <span className="font-normal">
                  {cartCourse?.Price} {cartCourse?.CurrencyCode}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartCourses;
