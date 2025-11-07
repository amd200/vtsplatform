import React from "react";
import TitleSection from "../../../components/shared/TitleSection";
import { Badge } from "../../../components/ui/badge";
import { Check, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { UserSession } from "@/types/common.types";
import { formatDate } from "@/utils/formatDate";
import RowSkeleton from "./skeletons/RowSkeleton";

function MySessions({ showAll = true, sessions, isLoading }: { showAll?: boolean; sessions: UserSession[]; isLoading?: boolean }) {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="جلساتي" />
          {showAll && <Button>عرض المزيد</Button>}
        </div>
        <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
          {isLoading ? (
            <RowSkeleton rows={10} colsPerRow={4} />
          ) : (
            sessions?.map((session, index) => (
              <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
                {/* Item */}
                <div className="flex gap-1">
                  <span>تاريخ الجلسة :</span>
                  <span className="font-normal">{formatDate(session?.LastSessionCheck)}</span>
                </div>
                <div className="flex gap-1">
                  <span>تنتهي في:</span>
                  <span className="font-normal">{formatDate(session?.Expiration)}</span>
                </div>
                <div className="flex gap-1">
                  <span>اخر تاريخ تأكيد :</span>
                  <span className="font-normal">{formatDate(session?.LastSessionCheck)}</span>
                </div>
                <div className="flex gap-1">
                  <span>هل انتهت :</span>{" "}
                  {session?.IsExpired ? (
                    <Badge variant={"faild"}>
                      <Check className="size-5" />
                    </Badge>
                  ) : (
                    <Badge variant={"success"}>
                      <X className="size-5" />
                    </Badge>
                  )}
                </div>
                <div className="flex gap-1">
                  <span>هل احتال :</span>
                  {session?.IsFraud ? (
                    <Badge variant={"faild"}>
                      <Check className="size-5" />
                    </Badge>
                  ) : (
                    <Badge variant={"success"}>
                      <X className="size-5" />
                    </Badge>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MySessions;
