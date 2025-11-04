"use client";
import Banner from "@/components/auth/Banner";
import SessionWrapper from "@/providers/SessionWrapper";
import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <main className="flex lg:flex-row flex-col items-center font-ar-medium ">
        <Banner />
        <div className="max-w-lg mx-auto w-full gap-y-6 flex flex-col items-center justify-center font-ar-medium px-5 lg:py-5 py-12">{children}</div>
      </main>
    </Provider>
  );
}

export default AuthLayout;
