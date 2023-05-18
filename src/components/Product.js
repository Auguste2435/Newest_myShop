import React from "react";
import { add, remove } from "../../redux/cart.slice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import Image from 'next/image';

const Product = ({ data }) => {
    //komponenten er  gjenbrukbar og det gir mulighet til å motta data fra sin overordnede komponent i form av rekvisitter.

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const addToCart = () => {
        dispatch(add(data)); //pluss produkt til vognen
        enqueueSnackbar(`Item added to your cart successfully`, {
            variant: "success",
            autoHideDuration: 3000,
        });
    };

    const removeFromCart = () => {
        dispatch(remove(data.id));
        enqueueSnackbar(`Item removed from your cart!`, {
            variant: "warning",
            autoHideDuration: 3000,
        });
    };

    return (
        <>
            <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center border-2 border-purple-400 gap-3 p-4 h-[350px] mt-10 ml-5  rounded-xl">
                <div className="h-[180px]">
                    <Image
                        src={data?.image} width={50} height={50}
                        alt={data.title}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg">
                        {data.title}
                    </h1>
                </div>
                <div className="flex items-center justify-between w-full mt-5">
                    {cart.some((p) => p.id === data.id) ? ( //sjekker om noen elementer fra vognen er like som produktet
                        <button //da kan man slette de produktene
                            className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
                            onClick={removeFromCart}
                        >
                            Remove item
                        </button>
                    ) : (
                        <button
                            className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
                            onClick={addToCart}
                        >
                            Add to cart
                        </button>
                    )}
                    <p>${data.price}</p>
                </div>
            </div>
        </>
    );
};

export default Product;
