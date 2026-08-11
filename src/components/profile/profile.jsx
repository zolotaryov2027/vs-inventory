import { FaUser } from "react-icons/fa";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import "./profile.css";
const profile = () => {
  return (
    <div className="profile__wrapper">
      <button className="login">
        <span className="login-icon">
          <FaUser />
        </span>
        Войти
      </button>
      <button className="settings">
        <span className="settings-icon">
          <IoMdSettings />
        </span>
      </button>
      <button className="notifications">
        <span className="notifications-icon">
          <IoIosNotifications />
        </span>
      </button>
    </div>
  );
};

export default profile;
