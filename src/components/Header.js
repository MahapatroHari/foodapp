import { useState } from "react";
import { logo } from "../utils/constants";

const Header = () => {
  const [logStat, setLogStat] = useState("LogIn");

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="logBtn"
            onClick={() => {
              logStat == "LogIn" ? setLogStat("Logout") : setLogStat("LogIn");
            }}
          >
            {logStat}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
