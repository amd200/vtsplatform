import TitleSection from "@/components/shared/TitleSection";
import { ExamResult, StudentCharge, StudentChargeDetail } from "../types/student.types";
import RowSkeleton from "./skeletons/RowSkeleton";
import { useGetStudentWalletQuery } from "../services/studentApi";

interface MyWalletProps {
  results: ExamResult[];
  isLoading?: boolean;
}

function MyWallet({ charges, isLoading }: { charges: StudentChargeDetail[]; isLoading: boolean }) {
  return (
    <div className="content bg-[#f9f9f9] py-7 px-3 rounded space-y-5">
      {isLoading ? (
        <RowSkeleton rows={10} colsPerRow={4} />
      ) : (
        charges &&
        charges.length > 0 &&
        charges?.map((charge: StudentChargeDetail) => (
          <div key={charge?.Id} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2 font-medium">
            <div className="flex gap-1">
              <span>تاريخ الفاتورة :</span>
              <span className="font-normal">{charge?.CreatedBy}</span>
            </div>
            <div className="flex gap-1">
              <span>طريقة الدفع :</span>
              <span className="font-normal">{charge?.PaymentType}</span>
            </div>
            <div className="flex gap-1">
              <span>المبلغ :</span>
              <span className="font-normal">{charge?.Total}</span>
            </div>
            <div className="flex gap-1">
              <span>حالة الدفع :</span>
              <span className="font-normal">{charge?.IsPaied}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyWallet;
