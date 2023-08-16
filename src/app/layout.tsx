"use client";
import Header from "@/components/header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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
