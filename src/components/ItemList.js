import { useState } from "react";
import { cdnLink } from "../utils/constants"
import { noImg } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ itemCards }) => {

    const dispatch = useDispatch();

    const handleAdd = (i) => {
        dispatch(addItem(i));
    };




    return (
        <div className="mt-10 mx-3.5 ">
            {itemCards.map((i) => (
                <div className="border-b-2 border-black text-black  m-2  p-4 flex justify-between ]">
                    <div className="w-9/12">
                        <div className="flex gap-2 items-center">
                            <p className="text-[13px] font-bold text-left">{i.card.info.name}</p>
                            <p className=" text-[13px] font-bold ml-2 text-left ">₹ {i.card.info.price / 100}</p>
                        </div>
                        <p className="  m-2 text-xs text-gray-900 text-left">{i.card.info.description}</p>
                    </div>

                    <div className="w-3/12">
                        <img src={cdnLink + i.card.info.imageId}
                            onError={(e) => {
                                e.target.src = noImg
                            }}
                            alt="" className=" rounded-md "></img>
                        <button className="relative bottom-5  text-black bg-white rounded-md p-2 font-bold text-[12px]  "
                            onClick={() => handleAdd(i)}
                        > Add Item ➕</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;