import "./navbar.scss";
import { ReactComponent as IconMoon } from "../../assets/icon-moon.svg";
import { ReactComponent as IconSun } from "../../assets/icon-sun.svg";
import ImageAvatar from "../../assets/image-avatar.jpg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useEffect } from "react";

const Navbar = (props) => {
  useEffect(() => {
    if (props.theme === "dark") {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
    } else if (props.theme === "light") {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
    }
  });
  return (
    <nav className="navbar">
      <div className="logo-container">
        <button className="logo-button">
          <Logo className="logo" />
        </button>
      </div>
      <div className="theme-swap-container">
        <button className="theme-swap-button" onClick={props.onChangeTheme}>
          {props.theme === "light" ? <IconMoon /> : <IconSun />}
        </button>
      </div>
      <div className="avatar-container">
        <img className="avatar-image" src={ImageAvatar} alt="Profile Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
