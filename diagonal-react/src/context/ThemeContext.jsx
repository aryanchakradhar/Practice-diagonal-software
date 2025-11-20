import { createContext, useState } from "react";

export const ThemeContext= createContext();


export default function ThemeProvider({ children }) {
  const [theme,setTheme] = useState("light");
  const toggleTheme = () =>{
    const updatedTheme = theme == "light" ? "dark" : "light";
    setTheme(updatedTheme);
  }
  return <ThemeContext.Provider value = {{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}