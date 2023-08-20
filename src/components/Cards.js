import React from "react";
import { StyledCards } from "./styles/global.styled";

export default function Card({title, image, body}){
  return <StyledCards>
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt=''/>
      </div>
      <div className="card-content">
      <div ClassName="card-title">
        <h3>{title}</h3>
      </div>
      <div ClassName="card-body">
        <p>{body}</p>
      </div>
      </div>
    </div>
  </StyledCards>

}