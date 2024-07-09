import { resListLink } from "./constants";
import { useEffect, useState } from "react";

const useFetchRes = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filListOfResto, setFilListOfResto] = useState([]);

  useEffect(() => {
    fetchRes();
  }, []);

  const fetchRes = async () => {
    try {
      const res = await fetch("https://handler-cors.vercel.app/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: resListLink,
        }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const jsonData = await res.json();
      const restaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRes(restaurants);
      setFilListOfResto(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { listOfRes, filListOfResto, setFilListOfResto };
};

export default useFetchRes;
