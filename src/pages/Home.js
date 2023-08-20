import { Title, MainContainer } from "../components/styles/global.styled";


export default function Home() {
  var title = String.raw`

  ██╗      ██████╗ ██████╗ ███████╗███╗   ███╗    
  ██║     ██╔═══██╗██╔══██╗██╔════╝████╗ ████║    
  ██║     ██║   ██║██████╔╝█████╗  ██╔████╔██║    
  ██║     ██║   ██║██╔══██╗██╔══╝  ██║╚██╔╝██║    
  ███████╗╚██████╔╝██║  ██║███████╗██║ ╚═╝ ██║    
  ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝    
                                                  
  ██╗██████╗ ███████╗██╗   ██╗███╗   ███╗         
  ██║██╔══██╗██╔════╝██║   ██║████╗ ████║         
  ██║██████╔╝███████╗██║   ██║██╔████╔██║         
  ██║██╔═══╝ ╚════██║██║   ██║██║╚██╔╝██║         
  ██║██║     ███████║╚██████╔╝██║ ╚═╝ ██║         
  ╚═╝╚═╝     ╚══════╝ ╚═════╝ ╚═╝     ╚═╝         
                                                  
  
`;
  return <>
  
  <MainContainer>
  <pre>{title}</pre>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et aliquam turpis. Etiam ut augue aliquam, fermentum justo varius, ullamcorper sem. Donec accumsan vitae lacus volutpat maximus. Nulla efficitur efficitur velit, eget feugiat ipsum hendrerit non. In tristique nulla sit amet dolor varius consectetur. Vestibulum consectetur turpis ut tortor posuere, id dictum velit elementum. Vivamus sodales non leo et eleifend. In non nisi dolor. Nunc pharetra luctus tellus, nec pulvinar ex rhoncus at.
  </MainContainer>  
</>
}

