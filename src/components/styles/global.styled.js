import styled from "styled-components";


export const darkTheme = {
  body: "#282828",
  header: "#3c3836",
  title: "#ebdbb2",
  subtitle: "#b6b6b6",
  icon: "#b6b6b6",
  active: "blue",
  font: "#bdae93",	
}

export const lightTheme = {
  body: "#fbf1c7",
  header: "#ebdbb2",
  title: "#3c3836",
  subtitle: "#333",
  icon: "#282828",
  active: "yellow",
  font: "#665c54",
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
  color: ${(props)=> props.theme.title};
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
  background-color: ${(props)=> props.theme.header};
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
    color: ${(props)=> props.theme.title};
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
    width: auto;
  }

  li{
    width: 80px;
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

`;

export const MainContainer = styled.div` 
  width: 40%;
  min-width: 300px; 
  position: fixed;
  left: 0;
  top: 50px;
  padding: 20px;
  box-sizing: border-box;
  color: ${(props)=> props.theme.font};
`;


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

.image-container img {
  overflow: hidden;
  height: 200px;
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