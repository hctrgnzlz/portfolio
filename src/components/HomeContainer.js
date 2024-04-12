import React from "react";
import { HomeContainer } from "./styles/global.styled";
import Splash from "../assets/computer.jpg";
import  SocialMedia  from "./Socials";

export default function HomePage(){
  return <HomeContainer>
    <div className="home-container">
      <div className="home-image-container">
        <img src={Splash} className="computer" alt="Vintage Computer"/>  
      </div>
      <div className="home-content">
          <p>Hello, I'm Hector Gonzalez. I'm a frontend developer who enjoys retro and minimalist design. </p>
      </div>
      <div className="home-links">
      <SocialMedia/>
      </div>
    </div>
  </HomeContainer>

}