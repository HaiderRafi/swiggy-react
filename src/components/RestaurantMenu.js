import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuCards from "./RestaurantMenuCards";

const RestaurantMenu = () => {
  let [restoMenuData, setRestoMenuData] = useState([]);
  let [restoMenuData1, setRestoMenuData1] = useState(null);
  let params = useParams();

  async function restoMenuApi() {
    let temp = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${params.id}`
    );
    let data = await temp.json();
    // console.log(data.data);
    setRestoMenuData(data.data.cards);
    // setRestoMenuData1(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    setRestoMenuData1(
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }
  //data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  useEffect(() => {
    restoMenuApi();
    // console.log(restoMenuData1);
  }, []);

  if (restoMenuData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="flex justify-center pt-10">
        <div className=" w-[60%] h-full">
          <button
            onClick={() => window.history.back()}
            className=" p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
          >
            BACK
          </button>
          <div className="flex justify-between items-center">
            <div className="p-2 m-2">
              <h1 className="text-2xl font-semibold">
                {restoMenuData[0].card?.card?.info?.name}
              </h1>
              <h1 className="text-sm pt-2 font-medium">
                {restoMenuData[0].card?.card?.info?.cuisines?.join(", ")}
              </h1>
              <h1 className="text-sm font-medium">
                {restoMenuData[0].card?.card?.info?.areaName}
              </h1>
              <h1 className="text-xs pt-2 text-gray-700 font-bold">
                🔴 High demand. Additional ₹15 delivery fee will apply to ensure
                better delivery
              </h1>
            </div>
            <div className="pr-3">
              <h1>⭐{restoMenuData[0].card?.card?.info?.avgRating} Rating</h1>
            </div>
          </div>

          {restoMenuData1 &&
            restoMenuData1.map((data, index) => {
              return <RestaurantMenuCards key={index} item={data} />;
            })}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

// <div>
{
  /* <h1>{}</h1> */
}
// </div>
