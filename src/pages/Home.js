import { Title, MainContainer } from "../components/styles/global.styled";


export default function Home() {
  var title = String.raw`
  __/\\\________/\\\________/\\\\\\\\\__/\\\\\\\\\\\\\\\____/\\\\\\\\\_____        
  _\/\\\_______\/\\\_____/\\\////////__\///////\\\/////___/\\\///////\\\___       
   _\/\\\_______\/\\\___/\\\/_________________\/\\\_______\/\\\_____\/\\\___      
    _\/\\\\\\\\\\\\\\\__/\\\___________________\/\\\_______\/\\\\\\\\\\\/____     
     _\/\\\/////////\\\_\/\\\___________________\/\\\_______\/\\\//////\\\____    
      _\/\\\_______\/\\\_\//\\\__________________\/\\\_______\/\\\____\//\\\___   
       _\/\\\_______\/\\\__\///\\\________________\/\\\_______\/\\\_____\//\\\__  
        _\/\\\_______\/\\\____\////\\\\\\\\\_______\/\\\_______\/\\\______\//\\\_ 
         _\///________\///________\/////////________\///________\///________\///__
`;
  return <>
  
  <MainContainer>
  <pre>{title}</pre>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et aliquam turpis. Etiam ut augue aliquam, fermentum justo varius, ullamcorper sem. Donec accumsan vitae lacus volutpat maximus. Nulla efficitur efficitur velit, eget feugiat ipsum hendrerit non. In tristique nulla sit amet dolor varius consectetur. Vestibulum consectetur turpis ut tortor posuere, id dictum velit elementum. Vivamus sodales non leo et eleifend. In non nisi dolor. Nunc pharetra luctus tellus, nec pulvinar ex rhoncus at.
  </MainContainer>  
</>
}

