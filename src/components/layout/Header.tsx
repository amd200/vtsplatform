"use client";
import { avatar, logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogIn, Menu, UserPlus } from "lucide-react";
import { getSession, signOut, useSession } from "next-auth/react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useGetGeneralSettingsQuery } from "@/services/dashboardApi";
function Header() {
  const { data: session } = useSession();
  const [greeting, setGreeting] = useState("مرحباً بك");
  const { data } = useGetGeneralSettingsQuery();
  const settings = data?.Data;

  useEffect(()=>{
  console.log(settings)

  },[settings])
  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("صباح الخير");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("مساء الخير");
    } else {
      setGreeting("مرحباً بك");
    }
  }, []);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return (
    <>
      <header className="sticky top-0 z-[100] bg-white">
        <div className="container flex items-center justify-between py-3 font-ar-medium gap-x-5">
          <div className="flex items-center gap-x-2">
            <Menu className="max-lg:block hidden" />
            <Link href="/">
              <img src={settings?.PlatformLogo ? `${BASE_URL}/${settings.PlatformLogo}` : "/images/default-logo.png"} alt={settings?.PlatformName || "Platform Logo"} width={120} height={60} priority className="h-[60px] w-auto object-contain cursor-pointer" />
            </Link>
          </div>
          <ul className="lg:flex hidden gap-x-4 ms-5">
            <li>
              <Link href={"/"}>حول المنصة</Link>
            </li>
            <li>
              <Link href={"/"}>المعرض</Link>
            </li>
            {settings?.UseSellBooks && (
              <li>
                <Link href={"/"}>الكتب والخدمات</Link>
              </li>
            )}
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
          )}
        </div>
      </header>
      {/* <ScrollProgress className="top-[73px]" /> */}
    </>
  );
}

export default Header;
