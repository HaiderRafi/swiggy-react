import React, { useEffect, useState } from "react";
import RestaurantsCards from "./RestaurantsCards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Offers = () => {
  let [offerData, setOfferData] = useState([]);

  async function offerApi() {
    let temp = await fetch(
      "https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant?location=patna&page=2"
    );
    let data = await temp.json();
    setOfferData(data?.data);
  }

  useEffect(() => {
    offerApi();
  });

  if(offerData.length===0){
    return <Shimmer/>
  }

  return (
    <>
      <div className="flex overflow-hidden  justify-around items-center w-[100%] h-[250px]  bg-gray-950">
        <div>
          <h1 className="text-white text-5xl">Offers for you</h1>
          <h1 className="text-white text-2xl ">
            Explore top deals and offers exclusively for you!
          </h1>
        </div>

        <img
          className="w-72"
          alt="img"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
        />
      </div>
      <button
        onClick={() => window.history.back()}
        className=" p-2  m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
      >
        BACK
      </button>
      <h1 className="pt-5 pb-5 pl-52 font-bold text-4xl underline  text-gray-600 ">
        All Offers(15)
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap w-[1000px]  justify-center p-2 m-2">
          {offerData.map((data, index) => {
            return (
              <Link key={index} to={`restaurant/${data.info.id}`}>
                <RestaurantsCards key={index} cards={data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Offers;
