import React from "react";
import { StyledContainer } from "./styles/global.styled";
import Splash from "../assets/computer.jpg"


export default function Container(){
  return <StyledContainer>
    <div className="home-container">
      <div className="home-image-container">
        <img src={Splash} className="computer" alt="Vintage Computer"/>  
      </div>
      <div className="home-content">
          <p>Hello, I'm Hector Gonzalez. I'm a frontend developer and project manager who enjoys retro-minimalism design. 
          Currently working at Agile Humanites. </p>
      </div>
    </div>
  </StyledContainer>

}