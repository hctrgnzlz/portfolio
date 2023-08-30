import React from "react";
import { StyledCards } from "./styles/global.styled";

export default function Card({title, image, body, url, languages}){
  return <StyledCards>
  
    <div className="card-container">
      <div className="image-container">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={image} alt=''/>
          <div class="image-overlay">
            <p>Visit Website</p>
          </div>
       </a>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p className="language">{languages}</p>
          <p>{body}</p>
        </div>
      </div>
    </div>
    <div className="line"></div>
    
  </StyledCards>

}