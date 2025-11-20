import React, { useContext } from 'react';
import "./ThemeButton.css";
import { ThemeContext } from './ThemeContext';


export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`} onClick={toggleTheme}>
      <div className="circle"></div>
    </div>
  );
}
