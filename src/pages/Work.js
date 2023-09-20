import Card from "../components/Cards";
import { StyledContainer } from "../components/styles/global.styled";
import { TabTitle } from "../components/GeneralFunctions";
import Pathways from "../assets/pathways.jpg";
import Cinemobilia from "../assets/cinemobilia.jpg";
import October27 from "../assets/october27.jpg";
import Sackson from "../assets/sackson.jpg"

export default function Work() {
  TabTitle('Hector Gonzalez | Work');
  return <>
  <StyledContainer>
 
  <Card
    title='The October 27th Archive'
    image={October27}
    languages= 'Programs/Languagues: Drupal, Docker, Adobe Illustrator, PHP, JavaScript, SASS, Web Components, Git, Beanstalk'
    body='The October 27 Archive collects responses to an antisemitic attack in Pittsburgh, Pennsylvania on October 27, 2018.'
    url='https://october27archive.org/'/>

  <Card
    title='Pathways to Diversity'
    image= {Pathways}
    languages= 'Programs/Languagues: Omeka, Adobe Illustrator, PHTML, JavaScript, SASS, Git, Beanstalk'
    body='A collection of documents, images, stories, and artifacts related to the desegregation of the campuses in  Centre College, Furman University, Rollins College, and Washington and Lee University.'
    url='https://omeka.centre.edu/s/pathways/'/>

  <Card
    title='CineMobilia'
    image= {Cinemobilia}
    languages= 'Programs/Languagues: Drupal, Docker, Adobe Illustrator, PHP, JavaScript, SASS, Web Components, Git, Beanstalk'
    body='CineMobilia is a nonprofit mobile media digitization lab dedicated to providing a mobile infrastructure for archiving and presenting archives from marginalized communities in Canada.'
    url='https://cinemobilia.ca/'/>

  <Card
    title='The Sid Sackson Portal'
    image= {Sackson}
    languages= 'Programs/Languagues: Omeka, PHTML, Adobe Illustrator, JavaScript, SASS, Git, Beanstalk'
    body="A digital collection of Sid Sacksons diaries and life work in Game Design."
    url='https://sacksonportal.museumofplay.org/s/sackson-portal/page/welcome'/>


</StyledContainer>
  
</>
  
}