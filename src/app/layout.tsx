"use client";
import Header from "@/components/header";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export const unstable_serialization = true; // Aqui

export const metadata: Metadata = {
  title: "Rodrigo M Simoes",
  description: "Aprsentação de Rodrigo e seus trabalhos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <html lang="pt-Br">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
