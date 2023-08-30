import Card from "../components/Cards";
import { MainContainer } from "../components/styles/global.styled";
import { TabTitle } from "../components/GeneralFunctions";


export default function Work() {
  TabTitle('Hector Gonzalez | Work');
  return <>
  <MainContainer>
  <Card
    title='The Sid Sackson Portal'
    image='https://tinyurl.com/3v296yu6'
    languages= 'Omeka, PHTML, JavaScript, Web Components, SASS, Git'
    body="A digital collection of Sid Sacksons diaries and life work in Game Design"
    url='https://sacksonportal.museumofplay.org/s/sackson-portal/page/welcome'/>
 

  <Card
    title='The October 27th Archive'
    image='https://tinyurl.com/3v296yu6'
    languages= 'Drupal, PHP, JavaScript, Web Components, SASS, Git'
    body='yes'
    url='https://october27archive.org/'/>

  <Card
    title='CineMobilia'
    image='https://tinyurl.com/3v296yu6'
    languages= 'Drupal, PHP, JavaScript, Web Components, SASS, Git'
    body='yes'
    url='https://cinemobilia.ca/'/>

  <Card
    title='Pathways to Diversity'
    image='https://tinyurl.com/3v296yu6'
    languages= 'Omeka, PHTML, JavaScript, Web Components, SASS, Git'
    body='yes'
    url='https://omeka.centre.edu/s/pathways/'/>

</MainContainer>
  
</>
  
}