import styled, { ThemeProvider } from "styled-components";

import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./assets/PowerIcon";
import Switch from "./components/Switch";
import { Title } from "./components/styles/switch.styled";
import { Info } from "./components/styles/switch.styled";
import { useState } from "react";
import "./components/Switch.css";
import { StyledApp } from "./components/styles/switch.styled";
import { darkTheme } from "./components/styles/switch.styled";
import { lightTheme } from "./components/styles/switch.styled";







export default function Slider(){
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }
  return <div class="slider">
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
   <StyledApp>
      <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        <Title>Hector Gonzalez</Title>
        <Info>hello@hctr.ca</Info>
        </StyledApp>
        </ThemeProvider>

  </div>
}