import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";

const Layout = () => {  
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('theme') || 'false');
  });
  
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div dir="rtl">
      <Header
        theme={darkMode}
        onChangeTheme={(theme) => toggleDarkMode(theme)}
      />
      <div id="main">
        <Outlet context={{ darkMode }}  />
      </div>
    </div>
  );
};

export default Layout;
