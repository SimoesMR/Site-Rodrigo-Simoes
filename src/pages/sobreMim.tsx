import Header from "@/components/header";
import React from "react";
import { useState } from "react";

const SobreMim = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      SOBRE MIM
    </div>
  );
};

export default SobreMim;
