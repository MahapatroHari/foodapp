import ResCards from "./ResCards";
// import { proRes } from "./ResCards";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRes from "../utils/useFetchRes";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchVal, setSearchVal] = useState("");
  const { listOfRes, filListOfResto, setFilListOfResto } = useFetchRes();
  const onlineStatus = useOnlineStatus();
  // const ResCardPro = proRes(ResCards);
  const handleFilter = () => {
    const filteredRest = listOfRes.filter((res) => {
      const Filtered = res.info.name
        .toLowerCase()
        .includes(searchVal.toLowerCase());
      return Filtered;
    });
    setFilListOfResto(filteredRest);
  }

  if (onlineStatus === false) {
    return <h1>Oops, Check your connection</h1>;
  }


  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="topContainer flex gap-2.5 p-5 ">
        <div className="searchContainer flex gap-2.5">
          <input
            className="searchBox border-2 border-black- rounded-lg text-center"
            placeholder="Restaurant Name"
            value={searchVal}
            onChange={(v) => {
              handleFilter();
              setSearchVal(v.target.value);
            }}
          />

          <button
            className=" bg-black text-white p-3 rounded-lg w-30 flex justify-center items-center gap-1  hover:shadow-gray-700 shadow-md"
            onClick={handleFilter}
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </div>
        <button
          className="bg-black p-3 gap-1 rounded-lg w-50 text-white flex justify-center items-center hover:shadow-gray-700 shadow-md"
          onClick={() => {
            const topRated = listOfRes.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilListOfResto(topRated);
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
            />
          </svg>
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filListOfResto.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {/* <ResCardPro resData={restaurant} /> */}
            <ResCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
