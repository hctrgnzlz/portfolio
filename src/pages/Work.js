import Card from "../components/Cards";
import { MainContainer } from "../components/styles/global.styled";
import { TabTitle } from "../components/GeneralFunctions";


export default function Work() {
  TabTitle('Hector Gonzalez | Work');
  return <>
  <MainContainer>
  <Card
    title='Card Title'
    image='https://tinyurl.com/3v296yu6'
    body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor nisi, eleifend accumsan lacus id, commodo vestibulum nunc. Mauris aliquet sem quis eros blandit'/>
  
  </MainContainer>
  
</>
  
}