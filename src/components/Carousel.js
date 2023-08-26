import React, { useEffect, useState } from "react";
import { IMG_LINK } from "../utils/config";
import CarouselCards from "./CarouselCards";
import CarouselLoader from "./CarouselLoader";

let Carousel=()=>{
    let[carouselData,setCarouselData]=useState([]);

    async function carouselApi(){
        let temp= await fetch('https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant/carousel');
        let data= await temp.json();
        // console.log(data.data.carousel);
        setCarouselData(data?.data?.carousel);
        console.log(carouselData);

    }

    useEffect(()=>{
        carouselApi();
        console.log(carouselData);
    },[])

    if(carouselData.length===0){
        return <CarouselLoader/>
    }
    
    return(
        <>
        <div className="flex overflow-hidden justify-center items-center w-[100%] h-[250px]  bg-gray-950">
        {
            carouselData.map((data,index)=>{
                return  <CarouselCards key={index} item={data.imageId} />
            })
        }
        </div>
        
        </>
    )
}

export default Carousel;
