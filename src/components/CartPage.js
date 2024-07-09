import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const CartPage = () => {
    const itemCards = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center w-6/12 mt-5 m-auto p-4 h-screen">
            <div className="flex justify-between">
                <h1 className="font-bold text-4xl">Cart Items</h1>
                <button className="bg-slate-900 p-2 rounded-md text-white font-bold hover:opacity-85"
                    onClick={handleClear}>Clear Cart</button>
            </div>

            <div className="m-10">
                {itemCards.length === 0 && <h2>Your Cart is empty, Please add some items to proceed further! </h2>}
                <ItemList itemCards={itemCards} />
            </div>
        </div>
    )
}

export default CartPage;