import { StreamVideoProvider } from "@/provider/StreamClientProvider";
import React, { ReactNode } from "react";
import { Metadata } from "next";

interface RootLayoutProp {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
