import "./navbar.scss";
import { ReactComponent as IconMoon } from "../../assets/icon-moon.svg";
import { ReactComponent as IconSun } from "../../assets/icon-sun.svg";
import ImageAvatar from "../../assets/image-avatar.jpg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <div className="theme-swap-container">
        <button className="theme-swap-button">
          <IconMoon />
        </button>
      </div>
      <div className="avatar-container">
        <img className="avatar-image" src={ImageAvatar} alt="Profile Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
