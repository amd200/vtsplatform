"use client";
import TitleSection from "@/components/shared/TitleSection";
import React from "react";
import { useDeleteCourseFromCartMutation, useGetStudentCartQuery } from "../services/cartApi";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { CartItem } from "../types/cart.types";
import { Recycle, RecycleIcon } from "lucide-react";

function CartCourses() {
  const { data } = useGetStudentCartQuery();
  const cartCaourses = data?.Data;
  console.log(cartCaourses);
  const total = cartCaourses?.reduce((sum, cart: CartItem) => sum + cart.Price, 0) || 0;
  const [deleteCourseFromCart] = useDeleteCourseFromCartMutation();
  const deleteCourse = async (id: string) => {
    try {
      await deleteCourseFromCart(id).unwrap();
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };
  return (
    <>
      <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
        {cartCaourses?.map((cartCourse: CartItem, index) => (
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
            <div className="flex gap-1">
              <Button onClick={() => deleteCourse(cartCourse?.Id)}>مسح</Button>
            </div>
          </div>
        ))}
      </div>
      <section className="cart-total mt-8">
        <div className="container">
          <div className="details-total w-[500px]">
            <h5 className="ar-medium mb-3 text-xl"> المبلغ الإجمالي</h5>
            <table className="w-full border border-gray-300 border-collapse  text-center mb-3">
              <tbody className="">
                <tr className="border-b  border-gray-300">
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold">حالة الفاتورة</td>
                  <td className="py-2 px-4">Open</td>
                </tr>
                <tr>
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold">اجمالي</td>
                  <td className="py-2 px-4">{total} جنيه</td>
                </tr>
              </tbody>
            </table>

            <Button className="w-full" variant={"default"}>
              {" "}
              اتمام الشراء
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartCourses;
