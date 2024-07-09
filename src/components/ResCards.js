import { cdnLink } from "../utils/constants";

const ResCards = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData?.info;

  const { slaString } = sla;

  return (
    <div className=" w-[280px] h-[425px]  m-3 bg-white border border-slate-950 rounded-lg   hover:shadow-gray-700 hover:shadow-xl">
      <img
        className="w-lvw h-52 rounded-t-lg"
        src={cdnLink + cloudinaryImageId}
      />
      <div className="p-5 mb-3 font-normal text-gray-700 dark:text-gray-400">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p>{costForTwo}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{slaString}</p>
        <p>Rating: {avgRating}</p>
      </div>
    </div>
  );
};
export const proRes = (ResCards) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black absolute text-white rounded-lg p-2 mt-1 ml-4">Promoted</label>
        <ResCards {...props}/>
      </div>
    );
  };
};

export default ResCards;
  