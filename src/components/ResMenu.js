//New ResMenu
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";

const ResMenu = () => {
  const { resID } = useParams();
  const resDetails = useFetchMenu(resID);

  if (resDetails.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines, sla } =
    resDetails?.data?.cards[2]?.card?.card?.info;
  console.log(resDetails);
  const { itemCards } =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

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
