import "./App.css";
import { FaBuilding, FaUserLarge } from "react-icons/fa6";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
const navigationLinks = [
  {
    text: "Помещения",
    icon: <FaBuilding />,
  },
  {
    text: "Сотрудники",
    icon: <FaUserLarge />,
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar links={navigationLinks} />
    </div>
  );
}

export default App;
