import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRes from "../utils/useFetchRes";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchVal, setSearchVal] = useState("");
  const { listOfRes, filListOfResto, setFilListOfResto } = useFetchRes();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return(
      <h1>Oops, Check your connection</h1>
    )
  }

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
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <ResCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
