import { useState } from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [logStat, setLogStat] = useState("LogIn");

  return (
    <div className="flex justify-between items-center bg-black shadow-lg shadow-slate-500">
      <div className="logoContainer">
        <img className="w-28 h-28"  src={logo} />
      </div>
      <div className="navItems">
        <ul className="flex items-center p-5 gap-5 text-white font-bold">
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          
          <li>Cart</li>
          <button
            className="bg-white text-stone-950 p-3 rounded-lg w-40"
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
