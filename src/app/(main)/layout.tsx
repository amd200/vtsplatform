import Footer from "@/components/layout/Footer";
import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogProvider } from "@/context/DialogContext";
import Header from "@/components/layout/Header";
import { fetcher } from "@/lib/api/fetcher";
import { GeneralSettingsResponse } from "@/types/common.types";
async function MainLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-255px)]">
        <DialogProvider>{children}</DialogProvider>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
