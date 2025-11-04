"use clinet";
import TitleSection from "@/components/shared/TitleSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InvoiceStatus } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import { useGetStudentPayementsQuery } from "../services/studentApi";

function MyPayments({ showAll = true }: { showAll?: boolean }) {
  const { data } = useGetStudentPayementsQuery();
  const payments = data?.Data;
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="مدفوعاتي" />
          {showAll && <Button>عرض المزيد</Button>}
        </div>
        <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
          {payments &&
            payments.length > 0 &&
            payments?.map((payment, index) => (
              <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
                <div className="flex gap-1">
                  <span>تاريخ الفاتورة :</span>
                  <span className="font-normal">{formatDate(payment?.InvoiceDate)}</span>
                </div>
                <div className="flex gap-1">
                  <span>سعر المقرر :</span>
                  <span className="font-normal">
                    {payment?.Amount} {payment?.currency}
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>اسم البنك :</span>
                  <span className="font-normal">{payment?.BankName}</span>
                </div>

                <div className="flex gap-1">
                  <span>حالة الدفع :</span>
                  <Badge variant="success">{InvoiceStatus[payment?.InvoiceStatus]}</Badge>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MyPayments;
