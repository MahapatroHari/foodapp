import { useState, useContext } from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const [logStat, setLogStat] = useState("LogIn");
  const { id, setUname } = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between items-center bg-black shadow-lg shadow-slate-500 ">
      <div className="logoContainer">
        <img className="w-28 h-28" src={logo} />
      </div>
      <div className="navItems">
        <ul className="flex items-center p-5 gap-5 text-white font-bold">
          {/* <p>Welcome, {id}</p>
          <input
            className="searchBox border-2 border-black- rounded-lg text-center text-slate-500 w-40 font-extralight"
            placeholder="Enter Your Name"
            value={id}
            onChange={(v) => {
              setUname(v.target.value);
            }}
          /> */}
          <li >
            <Link to="/" className="hover:bg-opacity-35 hover:bg-slate-500 p-2 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:bg-opacity-35 hover:bg-slate-500 p-2 rounded-md">About Us</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:bg-opacity-35 hover:bg-slate-500 p-2 rounded-md">Contact Us</Link>
          </li>

          <li >
            <Link to="/cart" className="hover:bg-opacity-35 hover:bg-slate-500 p-2 rounded-md">Cart ({cartItems.length} Items)</Link></li>
          <button
            className="bg-white text-stone-950 p-2 rounded-lg w-20 hover:shadow-md  hover:opacity-95"
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
