//New useFetch
import { resItemsLink } from "../utils/constants";
import { useEffect, useState } from "react";

const useFetchMenu = (resID) => {
  const [resDetails, setResDetails] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const rawData = await fetch(resItemsLink + resID);
    const json = await rawData.json();
    setResDetails(json);
  };

  return resDetails;
};

export default useFetchMenu;
