import React from "react";
import { IMG_LINK } from "../utils/config";

const RestaurantsCards = (props) => {
  return (
    <>
    

      <div className="w-[296px] h-[376px] mx-3 my-3 border border-gray-200 hover:border-gray-300 hover:shadow-md ">
        <div className="flex justify-center pt-4">
          <img
            className="w-[250px] h-[200px]   "
            src={IMG_LINK + props?.cards?.info?.cloudinaryImageId}
          />
        </div>

        <div className=" px-5 ">
          <h1 className=" pt-2 text-base font-semibold ">{ props?.cards?.info?.name}</h1>
          <h1 className=" text-xs font-medium pt-1">{props?.cards?.info?.cuisines.join(',')}</h1>

        <div className="flex pt-4 justify-between">
          <h1 className="text-xs font-medium">⭐{props?.cards?.info?.avgRating}</h1>
          <h1 className="text-xs font-medium">&#9672;</h1>
          <h1 className="text-xs font-medium">{props?.cards?.info?.sla?.deliveryTime}mins</h1>
          <h1 className="text-xs font-medium" >&#9672;</h1>
          <h1 className="text-xs font-medium">{props?.cards?.info?.costForTwo}</h1>
        </div>
        
        <div className="flex pt-4" >
            <p className="text-sm font-medium pr-3 text-red-800">🏷{props?.cards?.info?.aggregatedDiscountInfoV3?.header}</p>
            <p className=" text-sm font-medium  text-red-800">{props?.cards?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
        </div>
        
          
        </div>
      </div>

      
    </>
  );
};

export default RestaurantsCards;
//{props?.cards?.info?.name}
