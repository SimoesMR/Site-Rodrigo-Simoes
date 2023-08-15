"use client";
import Header from "@/components/header";
import { useState } from "react";

const SobreMim = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
    </div>
  );
};

export default SobreMim;
