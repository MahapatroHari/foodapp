import { resListLink } from "./constants";
import { useEffect, useState } from "react";

const useFetchRes = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filListOfResto, setFilListOfResto] = useState([]);

  useEffect(() => {
    fetchRes();
  }, []);

  const fetchRes = async () => {
    const rawData = await fetch(resListLink);
    const jsonData = await rawData.json();
    const restaurants =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRes(restaurants);
    setFilListOfResto(restaurants);
  };

  return { listOfRes, filListOfResto, setFilListOfResto };
};

export default useFetchRes;
  