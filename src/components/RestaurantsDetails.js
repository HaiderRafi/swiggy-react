import React, { useEffect, useState } from "react";
import RestaurantsCards from "./RestaurantsCards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RestaurantsDetails = () => {
  let [restoData, setRestoData] = useState([]);  //state for api call
  let [page,setPage]=useState(0);   //for infinite Scroll

  //subscribition to the store
  let dropDownData=useSelector((store)=>store.dropDown.text);
  // console.log(dropDownData);

  //for infinite scroll
    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((page) => page + 1);
    }
  };

  async function restoAPi(page) {
    let temp = await fetch(
      `https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant?location=${dropDownData}&page=${page}`
    );
    let data = await temp.json();
    
    if (page === 0) {
      setRestoData(data?.data);  // Reset the state with new city data
    } else {
      setRestoData((prevData) => [...prevData, ...data?.data]); // Append new page data to existing data
    }
  }

  //resetting the all data when i click any drop down
  useEffect(() => {
    restoAPi(0);
    setPage(0);
  }, [dropDownData]);

  //when page is grater than 0 then send the page number to the restoApi function
  useEffect(() => {
    if (page > 0) {
      restoAPi(page);
    }
  }, [page]);

  if (restoData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className="pt-5 pb-5 pl-52 font-bold text-4xl underline  text-gray-600 ">
        84 restaurants
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap w-[1000px]  justify-center p-2 m-2">
          {restoData.map((data,index) => {
            return <Link key={index} to={`restaurant/${data.info.id}`} ><RestaurantsCards key={index} cards={data} /></Link>
          })}
        </div>
      </div>
    </>
  );
};


export default RestaurantsDetails;
