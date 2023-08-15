import React, { useState } from "react";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// Essas declarações ficam fora do componente
export const unstable_serialization = true;
export const metadata: Metadata = {
  title: "Rodrigo M Simoes",
  description: "Aprsentação de Rodrigo e seus trabalhos",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="pt-Br">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
