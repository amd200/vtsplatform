"use client";
import React from "react";
import TitleSection from "../../../components/shared/TitleSection";
import { useGetStudentCoursesQuery, useGetStudentSubscriptionsQuery } from "../services/studentApi";
import { formatDate } from "@/utils/formatDate";

function MySubscriptions() {
  const { data } = useGetStudentSubscriptionsQuery();
  const { data: x } = useGetStudentCoursesQuery();
  console.log("xaaaaaaaaa", x);
  const Subscriptions = data?.Data;
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="اشتراكاتي" />
        </div>
        <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
          {Subscriptions?.slice(0, 6).map((subscription, index) => (
            <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
              <div className="flex gap-1">
                <span>المقرر :</span>
                <span className="font-normal">{subscription?.Title}</span>
              </div>
              <div className="flex gap-1">
                <span>متاح للطالب من تاريخ :</span>
                <span className="font-normal">{formatDate(subscription?.StartDate)}</span>
              </div>
              <div className="flex gap-1">
                <span>الى تاريخ :</span>
                <span className="font-normal">{formatDate(subscription?.EndDate)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySubscriptions;
