import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { resItemsLink } from "../utils/constants";

const ResMenu = () => {
  const [resDetails, setResDetails] = useState([]);
  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const rawData = await fetch(resItemsLink + resID);
    const myData = await rawData.json();
    setResDetails(myData);
    // setResDetails(myData.data.cards[2].card.card.info);
  };

  if (resDetails.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines, sla } =
    resDetails?.data?.cards[2]?.card?.card?.info;
  console.log(resDetails);
  const { itemCards } =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines}</h3>
      <h3>{sla.slaString}</h3>
      <h1>Menu</h1>
      <ul className="menuList">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹ {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
