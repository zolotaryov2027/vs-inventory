import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/header/header.jsx";
import NavBar from "./components/navBar/navBar.jsx";
import { FaBuilding, FaUserLarge } from "react-icons/fa6";

const navigationLinks = [
  {
    text: "Помещения",
    icon: <FaBuilding />,
    link: "premises",
  },
  {
    text: "Сотрудники",
    icon: <FaUserLarge />,
    link: "users",
  },
];

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="index-columns">
        <div className="index-column index-column__left">
          <NavBar links={navigationLinks} />
        </div>
        <div className="index-column index-column__right">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
