import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userName = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // Do not do below causes a lot of performance issues. If anything changes in store we will be subscribed that is not best appraoch always point to correct data
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;

  return (
    /*
    -> flex used to make the image and ul items come side by side
    -> justify-between is used to make the ul and logo go to one end of each side
    -> bg-pink:100 provides the background colour of pink to header
    -> sm:bg-yellow-50 provides the color yellow when it is small size 
    -> lg:bg-green-50 provides the color green when it is medium size
    */
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        {/* w-56 is used to control the width of the image */}
        <img alt="logo-icon" className="w-36" src={LOGO_URL} />
      </div>
      {/* flex items-center : Makes the items centered */}
      <div className="flex items-center">
        {/*
        -> flex makes the ul items side by side
        -> p-4 provides padding 1 rem along all the sides
        -> m-4 provides margin 1 rem alone all the sides
        */}
        <ul className="flex p-4 m-4">
          {/* px-4 : Provides padding 1rem on x axis (i.e) on left and right sides */}
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          {/* px-4 : Provides padding 1rem on x axis (i.e) on left and right sides */}
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          {/* px-4 : Provides padding 1rem on x axis (i.e) on left and right sides */}
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          {/* px-4 : Provides padding 1rem on x axis (i.e) on left and right sides */}
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* px-4 : Provides padding 1rem on x axis (i.e) on left and right sides */}
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* px-4 : Provides padding 1rem on x axis (i.e) on left and right sides */}
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
          {/* <li className="px-4">{userName.loggedInUser}</li> */}
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
