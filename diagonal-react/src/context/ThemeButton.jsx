import React, { useContext } from 'react';
// import "./ThemeButton.css";
import { ThemeContext } from './ThemeContext';


export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={`
        cursor-pointer flex items-center h-8 w-16 rounded-full p-1 border-1 
        ${theme === "light" ? "bg-white justify-start" : "bg-black justify-end"}
      `}
    >
      <div
        className="
          h-6 w-6 rounded-full bg-white border-1
        "
      ></div>
    </div>
  );
}
