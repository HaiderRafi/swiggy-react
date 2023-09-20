import React, { useState } from "react";
import { clearCart } from "../utils/redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let PayNow = () => {
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  function clearCartSlice() {
    dispatch(clearCart());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, such as sending data to a server.
    toast.success("Order Placed");
    setTimeout(() => {
      clearCartSlice();
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className=" flex flex-col w-full h-full">
        <div className="flex justify-evenly pt-5">
          <button
            onClick={() => window.history.back()}
            className=" p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
          >
            BACK
          </button>
        </div>
        <div className="flex flex-col justify-center items-center pb-6">
          <div className=" flex flex-col border border-dotted shadow-lg  w-[50%] h-[100%]">
            <div className="p-2 m-2">
              {/* <h2  >Checkout</h2> */}
              <form onSubmit={handleSubmit}>
                {/* Billing Address Section */}

                <h3 className="font-bold text-3xl ">Billing Address</h3>
                <div className="pt-5">
                  <label
                    className="font-semibold text-lg pr-28 "
                    htmlFor="billingName"
                  >
                    Name:
                  </label>
                  <input
                    className="border border-black rounded-sm w-60 m-2 h-8 "
                    type="text"
                    id="billingName"
                    value={billingName}
                    onChange={(e) => setBillingName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    className="font-semibold text-lg pr-24"
                    htmlFor="billingAddress"
                  >
                    Address:
                  </label>
                  <input
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    type="text"
                    id="billingAddress"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    className="font-semibold text-lg pr-32"
                    htmlFor="billingCity"
                  >
                    City:
                  </label>
                  <input
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    type="text"
                    id="billingCity"
                    value={billingCity}
                    onChange={(e) => setBillingCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    className="font-semibold text-lg pr-[119px]"
                    htmlFor="billingState"
                  >
                    State:
                  </label>
                  <select
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    id="billingState"
                    value={billingState}
                    onChange={(e) => setBillingState(e.target.value)}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Andhra Pradesh">Uttar Pradesh</option>
                    <option value="Goa">Goa</option>
                    {/* Add more Indian states here */}
                  </select>
                </div>
                <div>
                  <label
                    className="font-semibold text-lg pr-[86px]"
                    htmlFor="billingZip"
                  >
                    ZIP Code:
                  </label>
                  <input
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    type="text"
                    id="billingZip"
                    value={billingZip}
                    onChange={(e) => setBillingZip(e.target.value)}
                    required
                  />
                </div>

                {/* Payment Information Section */}
                <h3 className="font-bold text-3xl pt-5 pb-5">
                  Payment Information
                </h3>
                <div className="p-2">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                  />
                  <label htmlFor="creditCard">Credit Card</label>
                </div>

                <div className="p-2">
                  <input
                    type="radio"
                    id="debitCard"
                    name="paymentMethod"
                    value="debitCard"
                    checked={paymentMethod === "debitCard"}
                    onChange={() => setPaymentMethod("debitCard")}
                  />
                  <label htmlFor="debitCard">Debit Card</label>
                </div>

                <div>
                  <label
                    className="font-semibold text-lg pr-14 "
                    htmlFor="creditCardNumber"
                  >
                    Card Number:
                  </label>
                  <input
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    type="text"
                    id="creditCardNumber"
                    value={creditCardNumber}
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    className="font-semibold text-lg pr-6 "
                    htmlFor="expirationMonth"
                  >
                    Expiration Month:
                  </label>
                  <select
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    id="expirationMonth"
                    value={expirationMonth}
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    required
                  >
                    <option value="">Select Month</option>
                    <option value="01">January</option>
                    <option value="02">Febuary</option>
                    <option value="03"> March</option>
                    <option value="04"> April</option>
                    <option value="05"> May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08"> August</option>
                    <option value="09"> September</option>
                    <option value="10"> October</option>
                    <option value="11"> November</option>
                    <option value="12"> December</option>
                    {/* Add more months here */}
                  </select>
                </div>
                <div>
                  <label
                    className="font-semibold text-lg pr-[44px] "
                    htmlFor="expirationYear"
                  >
                    Expiration Year:
                  </label>
                  <select
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    id="expirationYear"
                    value={expirationYear}
                    onChange={(e) => setExpirationYear(e.target.value)}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    {/* Add more years here */}
                  </select>
                </div>
                <div>
                  <label
                    className="font-semibold text-lg pr-[132px] "
                    htmlFor="cvv"
                  >
                    CVV:
                  </label>
                  <input
                    className="border border-black rounded-sm w-60 m-2 h-8"
                    type="password"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  className=" p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
                  type="submit"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer /> {/*Tostify added  */}
      </div>
    </>
  );
};

export default PayNow;
