import { useState } from "react"
import ItemList from "./ItemList"

const MenuCategory = ({ data, SLvalue, setSLIndex, setSLIndexNull }) => {

    const { itemCards } = data

    console.log()

    const showList = () => {

        SLvalue ? setSLIndexNull() : setSLIndex(); 
    }




    return (
        <div>
            {/*Header */}

            <div className="w-6/12 bg-gray-300 m-auto mb-3 p-4 cursor-pointer rounded-md" >
                <div className="flex justify-between" onClick={showList} >
                    <div>{data.title} ({data.itemCards.length}) </div>
                    <div>🔻</div>
                </div>
                {SLvalue && <ItemList itemCards={itemCards} />}

            </div>


        </div>
    )
}

export default MenuCategory;