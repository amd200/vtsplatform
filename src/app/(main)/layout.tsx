import Footer from "@/components/layout/Footer";
import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogProvider } from "@/context/DialogContext";
import Header from "@/components/layout/Header";
function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="">
      <Header />
      <DialogProvider>{children}</DialogProvider>
      <Footer />
    </main>
  );
}

export default MainLayout;
