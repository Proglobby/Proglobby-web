"use client"
import NavBar from "./Components/NavBar";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }else{
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);
  return (
      <div className="trasform transition-[0.5s] duration-500">
        
      </div>
  );

}
