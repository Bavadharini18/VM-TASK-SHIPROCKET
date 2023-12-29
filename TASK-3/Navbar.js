import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/Overview">Overview</CustomLink>
        <CustomLink to="/Orders">Orders</CustomLink>
        <CustomLink to="/Shipments">Shipments</CustomLink>
         <CustomLink to="/NDR">NDR</CustomLink>
         <CustomLink to="/Wpcomm">Wpcomm</CustomLink>
         <CustomLink to="/Rto">Rto</CustomLink>
         <CustomLink to="/Courier">Courier</CustomLink>
         <CustomLink to="/Delays">Delays</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}