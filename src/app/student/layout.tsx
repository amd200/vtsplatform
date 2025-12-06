import Header from "@/components/layout/Header";
import Sidebar from "@/features/student/shared/Sidebar";
import { DialogProvider } from "@/context/DialogContext";
import React, { ReactNode } from "react";
import BottomNav from "@/features/student/shared/BottomNab";

function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="font-ar-medium py-8">
        <Sidebar />
        <DialogProvider>{children}</DialogProvider>
        <BottomNav/>
      </main>
    </>
  );
}

export default StudentLayout;
