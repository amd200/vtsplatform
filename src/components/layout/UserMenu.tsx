"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { avatar } from "@/assets/images";

export default function UserMenu({ session, greeting }: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-3 flex-row-reverse">
          <Image className="size-[35px] rounded-full" src={avatar} alt="" />
          <div className="text-xs text-start">
            {/* <span className="text-primary">مرحباً بك</span> */}
            <span className="text-primary">{greeting}</span>
            <p>{session?.user?.StudentName?.split(" ").slice(0, 2).join(" ")}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[9rem]">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem asChild>
          <Link href="/student" className="font-ar-medium flex-row-reverse text-sm">
            حسابي
          </Link>
        </DropdownMenuItem>{" "}
        <DropdownMenuItem className="font-ar-medium flex-row-reverse text-sm" onClick={() => signOut()}>
          تسجيل خروج
        </DropdownMenuItem>
        {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
        {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
