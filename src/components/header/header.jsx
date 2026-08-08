import { PiScalesFill } from "react-icons/pi";
import "./header.css";
export default function header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <span className="logo-icon">
          <PiScalesFill />
        </span>
        VS INVENTORY
      </a>
    </header>
  );
}
