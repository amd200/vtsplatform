"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
export function PostCommentBox() {
  const { data: session } = useSession();
  return (
    <div className="flex gap-3 p-4 border-t">
      <Avatar>
        <AvatarFallback>
          {session?.user?.StudentName?.trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((name) => name[0])
            .join("")
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>{" "}
      <input placeholder="اكتب تعليقًا" className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none text-sm" />
    </div>
  );
}
