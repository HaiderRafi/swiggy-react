import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full">
      <div>
        <img
          className="w-[500px]"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="img"
        />
      </div>
      <h1 className=" pt-2 text-4xl font-semibold">Your cart is empty</h1>
      <h1 className="pt-2 text-lg">
        You can go to home page to view more restaurants
      </h1>
      <Link to='/'><button className="p-3 m-3 rounded-lg bg-orange-500 hover:shadow-xl hover:bg-orange-400 text-white">
        SEE RESTAURANTS NEAR YOU
      </button></Link>
    </div>
  );
};

export default EmptyCart;
