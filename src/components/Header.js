import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropDownText } from "../utils/redux/dropDownSlice";
import { Link } from "react-router-dom";
import { logOut } from "../utils/redux/loginSlice";

let Header = () => {
  let [selectedDropValue, SetSelectedDropValue] = useState("patna"); //state for drop down value
  let dispatch = useDispatch(); //global dispathc

  //subscribing to the store for cart number
  let cartCount = useSelector((store) => store.cart.items);
  console.log(cartCount.length);

  //for userName display on Logout Button subscribing to the store
  let isUserLogin = useSelector((store) => store.login.islogin);
  // console.log(isUserLogin.data.name);
  let userName = isUserLogin?.data?.name;

  //for is token available, used in login logout
  let isTokenThere = useSelector((store) => store.login.islogin);

  //function for if i click mu logout button, it dispatcha an action for empty the logout,which
  //results removing the token,which results logout :)
  function logout() {
    dispatch(logOut({}));
  }

  // dispatch(dropDownText(selectedDropValue));
  //dispatch an action for storing the dropDown value in Store slice
  //always when you are dispatching, without function dispatch in an useEffect
  useEffect(() => {
    dispatch(dropDownText(selectedDropValue));
  }, [selectedDropValue, dispatch]);

  //function for getting the dropDrown values
  function handleSelectChange(e) {
    SetSelectedDropValue(e.target.value);
  }

  return (
    <>
      <div className=" flex justify-around p-4  items-center bg-gray-100">
        <div className="flex ">
          <a href="/">
            {" "}
            <img
              className="w-8 mr-8"
              src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
            />
          </a>
          <select
            onChange={handleSelectChange}
            className="pr-2 ml-5 bg-gray-100 text-gray-600 hover:text-orange-500  font-semibold hidden md:block"
          >
            <option value="patna">Patna</option>
            <option value="banglore">Banglore</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>

        <div className="flex">
          <Link to="/search">
            <div className="mr-6  text-gray-600 font-semibold hover:text-orange-500">
              🔍 Search
            </div>
          </Link>
          <Link to="/offers">
            <div className="mr-6  text-gray-600 font-semibold hover:text-orange-500">
              🛍 Offers
            </div>
          </Link>

          {/* conditional render for login and logout */}
          <Link to="/login">
            {isTokenThere.token ? (
              <div
                onClick={logout}
                className="mr-6  text-gray-600 font-semibold hover:text-orange-500"
              >
                👤 Logout: {userName}
              </div>
            ) : (
              <div className="mr-6  text-gray-600 font-semibold hover:text-orange-500">
                👤 Login
              </div>
            )}
          </Link>

          <Link to="/cart">
            <div className="mr-1 text-gray-600 font-semibold hover:text-orange-500">
              🛒 Cart{" "}
              <span className="font-bold text-orange-500">
                {cartCount.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

//<img src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" />

{
  /* <Link to="/login">
<div className="mr-6  text-gray-600 font-semibold hover:text-orange-500">
  👤 Log In:{userName}
</div>
</Link> */
}
