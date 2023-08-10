import styled from "styled-components";


export const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  icon: "#b6b6b6",
  lame: "red",
  active: "blue",
  hover: "green",
  font: "#FFFFFF"	
}

export const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
  icon: "#1c1c1c",
  lame: "pink",
  active: "yellow",
  hover: "pink",
  font: "#000000"
}


export const StyledApp = styled.div` 
  text-align: center;
  text-align: center;
  background-color: ${(props)=> props.theme.body};
  height: 100vh;
  transition: all 0.25s ease;
`;


export const Title = styled.h1`
  margin: 1rem;
  color: ${(props)=> props.theme.lame};
`;

export const Info = styled.p`
  margin: 1rem;
  color: ${(props)=> props.theme.subtitle}
`;


export const StyledNav = styled.nav` 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;
  height: 50px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
  }

  li.active {
    background-color: ${(props)=> props.theme.active};
  }

  li:hover {
    background-color: ${(props)=> props.theme.hover};
  }

`;

export const MainContainer = styled.div` 
  width: 40%;
  min-width: 300px; 
  position: fixed;
  left: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  color: ${(props)=> props.theme.font}
`;
