//New ResMenu
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";


const ResMenu = () => {
  const { resID } = useParams();
  const resDetails = useFetchMenu(resID);

  const [SLIndex, setSLIndex] = useState(0)

  if (Array.isArray(resDetails) && resDetails.length === 0) {
    return <MenuShimmer />;
    
  }

  const cards = resDetails?.data?.cards ?? [];
  const { name, avgRating, costForTwoMessage, cuisines = [], sla } =
    cards.find((card) => card?.card?.card?.info)?.card.card.info ?? {};


  const menuCards = cards.find((card) =>
    card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard.cardGroupMap.REGULAR.cards ?? [];
  const categories = menuCards.filter((card) =>
    card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center mt-10 ">
      <h1 className="font-extrabold text-3xl m-4" >{name}</h1>
      <div className="flex items-center justify-center m-4 gap-10">
        <h3 className="font-bold text-l " >{avgRating} Stars</h3>
        <h3 className="font-bold text-l ">{costForTwoMessage}</h3>
        <h3 className="font-bold text-l "> {cuisines.join(", ")}</h3>
        <h3 className="font-bold text-l ">{sla?.slaString}</h3>
      </div>

      <h2 className="font-extrabold text-2xl m-4">Menu</h2>
      {categories.length === 0 && <p>No menu items available right now.</p>}
      <ul className="menuList">


        {
          categories.map((i, index) => (
            <MenuCategory data={i.card.card}
              key={i.card.card.categoryId ?? i.card.card.title ?? index}
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
