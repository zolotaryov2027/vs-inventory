import "./App.css";
import { FaBuilding, FaUserLarge  } from "react-icons/fa6";
import NavBar from "./components/navBar/navBar";
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
    <>
      <NavBar links={navigationLinks} />
    </>
  );
}

export default App;
