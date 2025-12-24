"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Video, FileText, SendHorizontal } from "lucide-react"; // استيراد الأيقونات

export function CreatePost() {
  const { data: session } = useSession();

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-300">
      <div className="flex gap-4">
        <Avatar className="h-11 w-11 ring-2 ring-gray-50">
          <AvatarImage src={session?.user?.StudentImage || ""} />
          <AvatarFallback className="bg-primary/10 text-primary font-bold">
            {session?.user?.StudentName?.trim()
              .split(/\s+/)
              .slice(0, 2)
              .map((name) => name[0])
              .join("")
              .toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 relative">
          <input placeholder={`ماذا يدور في ذهنك يا ${session?.user?.StudentName?.split(" ")[0] || "طالبنا"}؟`} className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-transparent focus:border-primary/20 rounded-2xl px-5 py-3 outline-none transition-all duration-200 text-gray-700 placeholder:text-gray-400" />
        </div>

        <Button className="rounded-xl h-12 w-12 p-0 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
          <SendHorizontal className="h-5 w-5 rotate-180" />
        </Button>
      </div>

      <div className="flex gap-2 mt-4 pt-3 border-t border-gray-50">
        <PostOption icon={<Image className="text-blue-500" size={18} />} label="صورة" />
        <PostOption icon={<Video className="text-red-500" size={18} />} label="فيديو" />
        <PostOption icon={<FileText className="text-emerald-500" size={18} />} label="مستند" />
      </div>
    </div>
  );
}

// مكون فرعي صغير لخيارات الرفع
function PostOption({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors text-gray-600 font-medium text-sm">
      {icon}
      <span>{label}</span>
    </button>
  );
}
