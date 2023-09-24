import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { addItem, clearCart, removeItem } from "../utils/redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  
  let cartItems = useSelector((store) => store.cart.items);

  let isToken = useSelector((store) => store.login.islogin);
  // console.log(cartItems[0].id);

  let navigate=useNavigate()
  let dispatch = useDispatch();


  //local storage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      dispatch(clearCart()); // Clear the initial empty cart
      storedCartItems.forEach((item) => dispatch(addItem(item)));
    }
  }, []);

  //toremove and add
  // function addItems(data){
  //   dispatch(addItem(data))
  // }

  // function removeItems(data){
  //   dispatch(removeItem(data))
  // }



  
  

  function clearCartSlice() {
    dispatch(clearCart());
  }

  const total = cartItems.reduce((acc, item) => acc + item.price, 0) / 100;
  const totalWithTax = total + 50 + 32;

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className=" flex flex-col w-full h-full">
      <div className="flex justify-evenly pt-5">
        <button
          onClick={() => window.history.back()}
          className=" p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
        >
          BACK
        </button>
        <button
          className="p-2 m-4 bg-gray-800 text-white"
          onClick={() => clearCartSlice()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col justify-center items-center pb-6">
        <div className=" flex flex-col border border-dotted shadow-lg  w-[50%] h-[100%]">
          <h1 className="font-semibold text-3xl p-2 m-2 ">Total Items</h1>
          {cartItems.map((data) => {
            return (
              <>
                <h1 className="font-medium text-base pl-2  ">
                  &#9658;{data.name}:- RS{" "}
                  {data.defaultPrice || data.price / 100}
                  {/* <button onClick={()=>addItems(data)} >Add {}</button>
                  <button onClick={()=>removeItems()}>Remove</button> */}
                </h1>
              </>
            );
          })}
          <hr></hr>

          <h1 className="font-semibold text-3xl p-2 m-2">Bill Details</h1>
          <div className="flex justify-around">
            <div>
              <h1 className="text-sm">Item Total</h1>
              <h1 className="text-sm">Delivery Fee</h1>
              <h1 className="text-sm">GST and Restaurant Charges</h1>
              <hr></hr>
              <h1 className="font-semibold">TO PAY</h1>
            </div>
            <div>
              <h1 className="text-sm">{total}</h1>
              <h1 className="text-sm">50</h1>
              <h1 className="text-sm">32</h1>
              <h1 className="font-semibold">{totalWithTax}</h1>
            </div>
          </div>
        </div>
        
        <button  onClick={()=>{
           if(isToken.token){
            // alert("Order Confirm")
            navigate('/paynow')
            // clearCartSlice()
           }else{
            navigate('/login')
           }
            
        }} className="p-2 m-4 font-bold border border-orange-500 hover:bg-orange-500 hover:text-white">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Cart;







