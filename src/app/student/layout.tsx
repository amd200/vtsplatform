import Header from "@/components/layout/Header";
import Sidebar from "@/features/student/shared/Sidebar";
import { DialogProvider } from "@/context/DialogContext";
import BottomNav from "@/features/student/shared/BottomNab";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import NextAuth from "next-auth";

export default async function StudentLayout({ children }: { children: ReactNode }) {
  
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
