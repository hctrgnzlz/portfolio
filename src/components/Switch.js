import React, { useState } from "react";
import "./Switch.css";
import SunIcon from "./icons/SunIcon";


function Switch({toggleTheme, isDarkTheme}) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <>
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <SunIcon/>
    </label>
    </>
  );
}
export default Switch;
