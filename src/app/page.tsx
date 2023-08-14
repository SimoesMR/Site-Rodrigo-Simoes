"use client";
import Header from "@/components/header";
import Main from "@/components/main";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <Main></Main>
    </div>
  );
};

export default Home;
