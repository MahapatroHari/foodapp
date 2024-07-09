//New ResMenu
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";


const ResMenu = () => {
  const { resID } = useParams();
  const resDetails = useFetchMenu(resID);

  const [SLIndex, setSLIndex] = useState(0)

  if (resDetails.length === 0) {
    return <MenuShimmer />;
    
  }

  const { name, avgRating, costForTwoMessage, cuisines, sla } =
    resDetails?.data?.cards[2]?.card?.card?.info;


  const categories = resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="text-center mt-10 ">
      <h1 className="font-extrabold text-3xl m-4" >{name}</h1>
      <div className="flex items-center justify-center m-4 gap-10">
        <h3 className="font-bold text-l " >{avgRating} Stars</h3>
        <h3 className="font-bold text-l ">{costForTwoMessage}</h3>
        <h3 className="font-bold text-l "> {cuisines.join(", ")}</h3>
        <h3 className="font-bold text-l ">{sla.slaString}</h3>
      </div>

      <h2 className="font-extrabold text-2xl m-4">Menu</h2>
      <ul className="menuList">


        {
          categories.map((i, index) => (
            <MenuCategory data={i.card.card}
              SLvalue={index === SLIndex && true}
              setSLIndex={() => setSLIndex(index)}
              setSLIndexNull={() => setSLIndex(null)}
            />
          ))
        }

      </ul>

    </div>
  );
};

export default ResMenu;
