import { MainContainer } from "../components/styles/global.styled";
import Container from "../components/HomeContainer";
import { TabTitle } from "../components/GeneralFunctions";



export default function Home() {
  TabTitle('Hector Gonzalez | Home');
  return <>
  <MainContainer>
    <Container/>
  </MainContainer>  
</>
}

