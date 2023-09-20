import styled from "styled-components";

//THEMES: DARK & LIGHT//
export const darkTheme = {
  body: "#282828",
  header: "#3c3836",
  title: "#ebdbb2",
  highlight: "#7c6f64",
  highlighted: "#fbf1c7",
  icon: "#bdae93",
  font: "#bdae93",
  size: "25px",
}

export const lightTheme = {
  body: "#fbf1c7",
  header: "#ebdbb2",
  title: "#3c3836",
  highlight: "#a89984",
  highlighted: "#282828",
  icon: "#665c54",
  font: "#665c54",
  size: "25px",
}

//GENERAL PAGE STYLES//

export const StyledApp = styled.div` 
  ::selection {
    background:  ${(props)=> props.theme.highlight};
    color:  ${(props)=> props.theme.highlighted};
  }

  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props)=> props.theme.body};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props)=> props.theme.header};
    min-height: 40px;
  }

  text-align: center;
  text-align: center;
  background-color: ${(props)=> props.theme.body};
  height: 100vh;
  transition: all 0.25s ease;
  font-family: 'Fira Code', monospace;
  overflow-y: auto;
  font-size: 16px;
  box-sizing: border-box;

`;


//CONTAINER STYLES//
export const StyledContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  box-sizing: border-box;
  color: ${(props)=> props.theme.font};
  

`;


// IMAGE CONTAINER STYLES//
export const ImgContainer = styled.div` 
  height: 350px;
  width: 350px;

  .computer {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;



//TITLE STYLES//
export const Title = styled.div`
  color: ${(props)=> props.theme.title};
  font-weight: bold;
  font-size: 1.125rem;
`;

//NAVIGATION STYLES//
export const StyledNav = styled.nav` 
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${(props)=> props.theme.header};
  gap: 2rem;
  padding: 0 1rem;
  height: 50px;
  z-index: 1;
      
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    margin-right: 100px;

    @media only screen and (max-width: 600px) {
      margin-right: 0;
    }
  }

  a {
    color: ${(props)=> props.theme.title};
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
    width: auto;
    font-size: 1.05rem;
  }

  li{
    width: 100px;
    display: flex;
    justify-content: center;
    background-color: ${(props)=> props.theme.header};
  
  }

  li.active {
    background-color: ${(props)=> props.theme.body};

  }

  li:hover {
    background-color: ${(props)=> props.theme.hover};
  }

  .site-title:hover::after {
    content: "  █";
    display: inline;
    animation: blink-animation 1s infinite;
    padding-left: 10px;
    padding-bottom: 4px;
      
    @keyframes blink-animation {
    0%, 50%, 100% {
    opacity: 1;
    }
    25%, 75% {
    opacity: 0;
    }
  }
  }

`

export const HomeContainer = styled.div`
  .home-container {
    width: 400px;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
      width: 250px;
    }  
  }


  .home-image-container{
    position: relative;
    display: inline-block;
  }

  .home-image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    overflow: hidden;
    transition: filter 0.3s;

  }


  .home-content {
    margin-top: 0.3rem;
    border-bottom: 2px dashed ${(props)=> props.theme.font};
    border-top: 2px dashed ${(props)=> props.theme.font};
    
  }

  a {
    color: ${(props)=> props.theme.title}
  }
  .home-links {
    margin-top: 0.3rem;

`


//CARD STYLES//
export const StyledCards = styled.div`
  .card-container {
    width: 400px;
    overflow: hidden;
    background-color: ${(props)=> props.theme.header};
    margin-top: 10px;
    
    @media only screen and (max-width: 600px) {
      width: 250px;
    }  
  }

  .line {
    display: block;
    border-top: 2px dashed ${(props)=> props.theme.font};
    margin: 2em 0;
    padding: 0;
  }

  .image-container {
    position: relative;
    display: inline-block;
  }


  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    overflow: hidden;
    transition: filter 0.3s;
    display: block;

  }

  .image-container:hover img {
    filter: blur(.5px);
  }

  .image-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .image-container:hover .image-overlay {
    opacity: 1;
  }

  .card-content {
    margin: 1rem;
    margin-top: 0.3rem;
    
  }

  .card-title {
    margin-bottom: .5rem;
    
  }

  .language {
    font-weight: 300;
    margin-top: .5rem;
  }

  h3, p {
    margin: 0;
    padding: 0;
  }

`

// SWITCH CONTAINER//
export const SwitchContainer = styled.div`
  
  text-align: center;
  position: absolute;
  bottom: 10px;
  right: 25px;
  width: 50px;

  p {
    color: ${(props)=> props.theme.font};
    font-size: 10px;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    right: 10px;
  }
  

  .toggle-switch input[type="checkbox"] {
    display: none;
  }
`



export const IconContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  a {
    margin-right: 15px;
  }
  .icon {
    height: ${(props)=> props.theme.size};
    display: block;
  
  }

  .email-icon {
    height: ${(props)=> props.theme.size};
    margin-right: 10px;
    padding: 0
    margin: 0;
    cursor: pointer;
  }

  span  {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  }

  span.visible {
    opacity: 1;
  }

`
