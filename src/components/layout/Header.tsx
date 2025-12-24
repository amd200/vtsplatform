import { avatar, logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogIn, Menu, UserPlus } from "lucide-react";
import { signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { GeneralSettingsResponse } from "@/types/common.types";
import { fetcher } from "@/lib/api/fetcher";
import UserMenu from "./UserMenu";
async function Header() {
  const data = await fetcher<GeneralSettingsResponse>(`/platform/settings/generalSettings`);
  const settings = data?.Data;
  const session = await getServerSession(authOptions);

  const hour = new Date().getHours();
  const greeting = hour >= 5 && hour < 12 ? "صباح الخير" : hour >= 12 && hour < 18 ? "مساء الخير" : "مرحباً بك";

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return (
    <>
      <header className="sticky top-0 z-[50] bg-white">
        <div className="container flex items-center justify-between py-3 font-ar-medium gap-x-5">
          <div className="flex items-center gap-x-2">
            <Menu className="max-lg:block hidden" />
            <Link href="/">
              <img src={settings?.PlatformLogo ? `${BASE_URL}/${settings.PlatformLogo}` : "/images/default-logo.png"} alt={settings?.PlatformName || "Platform Logo"} width={160} height={60} className="h-12 w-auto object-contain cursor-pointer" />
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
            <UserMenu session={session} greeting={greeting} />
          )}
        </div>
      </header>
      {/* <ScrollProgress className="top-[73px]" /> */}
    </>
  );
}

export default Header;
