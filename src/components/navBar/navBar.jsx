import "./navBar.css";
import NavigationItem from "../navigation-item/navigation-item";

export default function NavBar({ links }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.map((link) => (
          <NavigationItem textLink={link.text} icon={link.icon} />
        ))}
      </ul>
    </nav>
  );
}
