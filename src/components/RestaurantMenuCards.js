import React, { useEffect } from "react";
import { IMG_LINK } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/redux/cartSlice";
import { FaMinus,FaPlus } from 'react-icons/fa';


const RestaurantMenuCards = (props) => {
  let dispatch= useDispatch();      //global dispatch

  
  //disptaching an action in a button click function to add items in store
  function addFoodItems(data){
    dispatch(addItem(data?.card?.info))
  }

    //disptaching an action in a button click function to removeadd items in store
  function removeFoodItems(){
    dispatch(removeItem())
  }


  return (
    <div>
      <div>
        <h1 className="p-2 m-2 text-xl font-bold hover:underline">
          {props?.item?.card?.card?.title}  {/* data direct comming from prop which is already looped   */}
        </h1>

        {/* again looping because itemCards is also an array */}
        {props?.item?.card?.card?.itemCards &&
          props.item.card.card.itemCards.map((itemCard, index) => (
            <>
              <div
                className=" p-2 m-2 flex justify-between items-center "
                key={index}
              >
                <div>
                  <h2 className="text-base font-semibold">{itemCard.card.info.name}</h2>
                  <p className="text-sm font-medium"> {itemCard.card.info.price/100}:₹</p>
                  <p className="text-sm font-light ">{itemCard.card.info.description}</p>
                  
                </div>
                <div className="flex justify-center items-center">
                <button onClick={()=>removeFoodItems(itemCard)} className="p-2 hover:bg-red-400 hover:rounded-full"><FaMinus/></button>
                <img
                  className="w-32"
                  src={IMG_LINK + itemCard.card.info.imageId}
                />
                <button onClick={()=>addFoodItems(itemCard)} className=" hover:bg-green-400 hover:rounded-full p-2"><FaPlus/></button>
                </div>
              </div>
              <hr></hr>
            </>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenuCards;

// <h1>{props?.item?.card?.card?.info?.name}</h1>

//data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
