import { ImgContainer, MainContainer } from "../components/styles/global.styled";
import Splash from "../assets/computer.jpg"
import { TabTitle } from "../components/GeneralFunctions";



export default function Home() {
  TabTitle('Hector Gonzalez | Home');
  return <>
  <MainContainer>
  <ImgContainer>
    <img src={Splash} className="computer" alt="Vintage Computer"/>  
  </ImgContainer>
    <p>Hello, I'm Hector Gonzalez. </p>
    <p>I'm a frontend developer and project manager currently working at Agile Humanites.  </p>
  </MainContainer>  
</>
}

