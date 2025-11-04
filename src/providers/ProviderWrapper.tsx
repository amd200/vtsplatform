// src/components/ProviderWrapper.tsx
"use client";

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface ProviderWrapperProps {
  children: ReactNode;
}

const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
