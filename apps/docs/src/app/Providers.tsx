"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { ToastProvider, SideBarNavigationProvider } from "@compasso/scala";

import "@compasso/scala/dist/index.css";
import "./globals.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false}>
      <ToastProvider>
        <SideBarNavigationProvider>{children}</SideBarNavigationProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
