import { resItemsLink } from "../utils/constants";
import { useEffect, useState } from "react";

const useFetchMenu = (resID) => {
  const [resDetails, setResDetails] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resID]); // Add resID to the dependency array to refetch if it changes

  const fetchMenu = async () => {
    try {
      const res = await fetch("https://handler-cors.vercel.app/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: resItemsLink + resID,
        }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();
      setResDetails(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return resDetails;
};

export default useFetchMenu;
