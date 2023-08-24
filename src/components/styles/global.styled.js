import styled from "styled-components";

//THEMES: DARK & LIGHT//
export const darkTheme = {
  body: "#282828",
  header: "#3c3836",
  title: "#ebdbb2",
  subtitle: "#b6b6b6",
  icon: "#bdae93",
  active: "blue",
  font: "#bdae93",	
}

export const lightTheme = {
  body: "#fbf1c7",
  header: "#ebdbb2",
  title: "#3c3836",
  subtitle: "#333",
  icon: "#665c54",
  active: "yellow",
  font: "#665c54",
}

//GENERAL PAGE STYLES//
export const StyledApp = styled.div` 
  text-align: center;
  text-align: center;
  background-color: ${(props)=> props.theme.body};
  height: 100vh;
  transition: all 0.25s ease;
  font-family: 'Fira Code', monospace;
  overflow-y: auto;

`;


//CONTAINER STYLES//
export const MainContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50px;
  padding: 20px;
  margin-top: 50px;
  box-sizing: border-box;
  color: ${(props)=> props.theme.font};
`;

// IMAGE CONTAINER STYLES//

export const ImgContainer = styled.div` 
  height: 350px;
  width: 350px;
  margin-top: 50px;

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

`;


//CARD STYLES//
export const StyledCards = styled.div`
.card-container {
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 9px 15px -5px;
  transition: 0.3s;
  animation: ease-in;
  background-color: ${(props)=> props.theme.header};
}

.card-container:hover {
  transform: scale(1.1);
  box-shadow: 0px 9px 15px 0px;

}

.image-container{
  height: 250px
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.card-content {
  margin: 1rem;
  margin-top: 0.3rem;
}

h3, p {
  margin: 0;
  padding: 0;
}

.card-title {
  margin-bottom: 0.5rem;
}
`

// SWITCH CONTAINER//
export const SwitchContainer = styled.div`
  margin: 2rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;

  .toggle-switch input[type="checkbox"] {
    display: none;
  }
`;

