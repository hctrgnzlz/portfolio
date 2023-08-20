import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { StyledNav } from "./styles/global.styled";
import { Title } from "./styles/global.styled";

export default function Navbar(){
  return <StyledNav>
    <Link to="/" className="site-title"> <Title>HTCR </Title> </Link>
    <ul>
    
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/work">Work</CustomLink>
     
    </ul>
  </StyledNav>
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}