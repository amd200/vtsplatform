import React from "react";
import TitleSection from "../../../components/shared/TitleSection";
import { Badge } from "../../../components/ui/badge";

function MyInvoicesCourses() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection
            title="فواتير المقررات
"
          />
        </div>
        <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
          <div className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
            {/* Item */}
            <div className="flex gap-1">
              <span>تاريخ الاضافة :</span>
              <span className="fort-normal">24-07-2025 04:13 م</span>
            </div>
            <div className="flex gap-1">
              <span>عدد المقررات :</span>
              <span className="fort-normal">1</span>
            </div>
            <div className="flex gap-1">
              <span>اجمالي :</span>
              <span className="fort-normal">0 جنية</span>
            </div>
            <div className="flex gap-1">
              <span>مفعل كود خصم :</span>
              <span className="fort-normal">لا</span>
            </div>
            <div className="flex gap-1">
              <span>حالة الفاتورة :</span>
              <Badge variant={"success"}>Confirmed</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyInvoicesCourses;
