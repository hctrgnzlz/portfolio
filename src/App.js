import { ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import Switch from "./components/Switch";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { StyledApp, darkTheme, lightTheme } from "./components/styles/global.styled";


function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }
  
  return (
    <>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
          </Routes>
       <div className="container">
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </div>
      </StyledApp>
    </ThemeProvider>
  </>
  
  )
}

export default App;
