"use client";
import { avatar, logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogIn, Menu, UserPlus } from "lucide-react";
import { getSession, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
function Header() {
  const { data: session } = useSession();
  return (
    <header>
      <div className="container flex items-center justify-between py-3 font-ar-medium gap-x-5">
        <div className="flex items-center gap-x-2">
          <Menu className="max-lg:block hidden" />
          <Link href="/">
            <Image src={logo} alt={"logo"} />
          </Link>
        </div>
        <ul className="lg:flex hidden gap-x-4 ms-5">
          <li>
            <Link href={"/"}>حول المنصة</Link>
          </li>
          <li>
            <Link href={"/"}>المعرض</Link>
          </li>
          <li>
            <Link href={"/"}>المحاضرين</Link>
          </li>
          <li>
            <Link href={"/"}>تواصل معنا</Link>
          </li>
        </ul>
        {!session?.user ? (
          <div className="flex items-center gap-x-1">
            {/* <Button >حجز السنتر</Button> */}
            <Button>
              <UserPlus />
              <Link href={"/signup"}>جديد</Link>
            </Button>
            <Button>
              <LogIn />
              <Link href={"/login"}>دخول</Link>
            </Button>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-x-3 flex-row-reverse">
                <Image className="size-[35px] rounded-full" src={avatar} alt="" />
                <div className="text-xs text-start">
                  <span className="text-primary">مرحباً بك</span>
                  <p>{session?.user?.StudentName?.split(" ").slice(0, 2).join(" ")}</p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem className="font-ar-medium flex-row-reverse text-sm">حسابي</DropdownMenuItem>
              <DropdownMenuItem className="font-ar-medium flex-row-reverse text-sm" onClick={() => signOut()}>
                تسجيل خروج
              </DropdownMenuItem>
              {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
              {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}

export default Header;
