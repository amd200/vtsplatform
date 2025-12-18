import Header from "@/components/layout/Header";
import Sidebar from "@/features/student/shared/Sidebar";
import { DialogProvider } from "@/context/DialogContext";
import BottomNav from "@/features/student/shared/BottomNab";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import NextAuth from "next-auth";
import { auth } from "@/auth";

export default async function StudentLayout({ children }: { children: ReactNode }) {
  const session = await auth();

  // 1️⃣ مش مسجل دخول
  if (!session) {
    redirect("/login");
  }

 // 2️⃣ مش Student (بديل token?.Role !== 8)
  // if (session.user.role !== 8) {
  //   redirect("/unauthorized"); // أو /login
  // }
  return (
    <>
      <Header />
      <main className="font-ar-medium py-8">
        <Sidebar />
        <DialogProvider>{children}</DialogProvider>
        <BottomNav />
      </main>
    </>
  );
}
