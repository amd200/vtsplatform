import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function PostHeader() {
  return (
    <div className="flex items-center gap-3 p-4">
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>{" "}
      <div>
        <p className="font-semibold text-primary">سيد عبد الله حسام</p>
        <span className="text-xs text-gray-400">منذ دقيقة</span>
      </div>
    </div>
  );
}
