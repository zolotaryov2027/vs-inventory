import { PiScalesFill } from "react-icons/pi";
import Search from "../search/search";
import Profile from "../profile/profile";
import "./header.css";
export default function header() {
  return (
    <header className="header">
      <div className="columns">
        <div className="column column__left">
          <a href="#" className="logo">
            <span className="logo-icon">
              <PiScalesFill />
            </span>
            VS INVENTORY
          </a>
        </div>
        <div className="column column__right">
          <Search />
          <Profile />
        </div>
      </div>
    </header>
  );
}
