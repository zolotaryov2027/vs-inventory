import "./navigation-item.css";
import { NavLink } from "react-router";
export default function navigationItem({ textLink, icon, link }) {
  return (
    <>
      <li className="navigation-item">
        <NavLink to={link} className="navigation-item__link">
          <span className="navigation-item__icon">{icon}</span>
          {textLink}
        </NavLink>
      </li>
    </>
  );
}
