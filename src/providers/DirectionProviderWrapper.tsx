"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import { ReactNode } from "react";

function DirectionProviderWrapper({ children }: { children: ReactNode }) {
  return <DirectionProvider dir="ltr">{children}</DirectionProvider>;
}

export default DirectionProviderWrapper;
