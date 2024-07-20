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

          <li data-testid="CartInfo">
            <Link to="/cart" >
              {/* Cart ({cartItems.length} Items) */}
              <div className="flex justify-center items-center mr-2">
                <div className="relative py-2">
                  <div className="bottom-5 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartItems.length}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
          <button
            className="bg-white text-stone-950 p-2 rounded-lg w-20 hover:shadow-md  hover:opacity-95"
            onClick={() => {
              logStat == "LogIn" ? setLogStat("LogOut") : setLogStat("LogIn");
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
