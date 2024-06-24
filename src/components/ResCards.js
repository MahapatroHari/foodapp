import { cdnLink } from "../utils/constants";

const ResCards = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData?.info;

  const { slaString } = sla;

  return (
    <div className="resCard">
      <img className="resImg" src={cdnLink + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{costForTwo}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{slaString}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default ResCards;
