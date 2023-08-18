"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@compasso/scala";

import './globals.css'
import "@compasso/scala/dist/index.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}
