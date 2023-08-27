import React, { useEffect, useState } from "react";
import SearchedDataCards from "./SearchedDataCards";

const Search = () => {
  let [searchQuery, setSearchQuery] = useState("");
  let [searchData, setSearchData] = useState([]);

  async function searchApi() {
    let temp = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=25.603916&lng=85.1360248&trackingId=undefined&str=${searchQuery}`
    );
    let data = await temp.json();
    setSearchData(data?.data?.suggestions);
    console.log(data?.data?.suggestions);
  }

  //debouncing
  useEffect(() => {
    let timer = setTimeout(() => {
      searchApi();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // if(searchData.length===0){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <div className="flex flex-col  ">
        <div className="flex justify-center pt-7">
          <input
            className="bg-gray-200 border border-black w-[50%] h-10 rounded-lg pl-2 "
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Search Food"
          />
        </div>

        <div className="flex flex-col items-center pt-7 pb-7">
          {searchData &&
            searchData.map((data, index) => {
              return <SearchedDataCards items={data} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Search;
