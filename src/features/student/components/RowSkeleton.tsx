import { Skeleton } from "@/components/ui/skeleton";

interface RowSkeletonProps {
  rows?: number;
  colsPerRow?: number;
}

export default function RowSkeleton({ rows = 3, colsPerRow = 4 }: RowSkeletonProps) {
  return (
    <div className="space-y-5">
      {Array.from({ length: rows }).map((_, idx) => (
        <div key={idx} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2 font-medium animate-pulse">
          {Array.from({ length: colsPerRow }).map((cols, rowIdx) => (
            <div key={rowIdx} className="flex gap-3">
              <Skeleton className="h-5 w-32 rounded bg-gray-200" />
              <Skeleton className="h-5 w-32 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
