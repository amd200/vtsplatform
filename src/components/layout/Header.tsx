import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogIn, Menu, UserPlus } from "lucide-react";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header>
      <div className="container flex items-center justify-between py-3 font-ar-medium gap-x-5">
        <div className="flex items-center gap-x-2">
          <Menu />
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
        {!session?.user && (
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
        )}
      </div>
    </header>
  );
}

export default Header;
