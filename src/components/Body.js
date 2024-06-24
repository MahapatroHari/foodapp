import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filListOfResto, setFilListOfResto] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetchData();
    console.log("Rendered with effect");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilListOfResto(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="topContainer">
        <div className="searchContainer">
          <input
            className="searchBox"
            value={searchVal}
            onChange={(v) => {
              setSearchVal(v.target.value);
            }}
          />

          <button
            className="searchBtn"
            onClick={() => {
              const filteredRest = listOfRes.filter((res) => {
                const Filtered = res.info.name
                  .toLowerCase()
                  .includes(searchVal.toLowerCase());
                return Filtered;
              });
              setFilListOfResto(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filterBtn"
          onClick={() => {
            const topRated = listOfRes.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilListOfResto(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="resContainer">
        {filListOfResto.map((restaurant) => (
          <ResCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
