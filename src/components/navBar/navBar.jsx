import "./navBar.css";
import NavigationItem from "../navigation-item/navigation-item";

const navBar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.map((link) => (
          <NavigationItem
            textLink={link.text}
            icon={link.icon}
            link={link.link}
          />
        ))}
      </ul>
    </nav>
  );
};

export default navBar;
