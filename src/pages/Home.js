import { StyledContainer } from "../components/styles/global.styled";
import HomePage from "../components/HomeContainer";
import { TabTitle } from "../components/GeneralFunctions";



export default function Home() {
  TabTitle('Hector Gonzalez | Home');
  return <>
  <StyledContainer>
    <HomePage/>
  </StyledContainer>  
</>
}

