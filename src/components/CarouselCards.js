import React from "react";
import { IMG_LINK } from "../utils/config";

const CarouselCards = (props) => {
  return (
    <>
      {/* <div className="m-5 w-[300px] "> */}
        <img className="w-[250px] m-5" src={IMG_LINK + props.item} />
      {/* </div> */}
    </>
  );
};

export default CarouselCards;
