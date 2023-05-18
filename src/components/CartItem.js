import React from "react";
import { Delete } from "@mui/icons-material"; //import delete det er en icon "bilde"
import { remove } from "../../redux/cart.slice"; //import remove funksjon fra cart.slice
import { useDispatch } from "react-redux"; //useSelector som er brukt til å ta av tilstand, useDispatch - oppdaterer tilstand
import { useSnackbar } from "notistack";
import Image from 'next/image';

const CartItem = ({ data }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const removeItemFromCart = () => {
    dispatch(remove(data.id)); //oppdater og slett produktet. data.id er produktens id
    enqueueSnackbar(`Item removed from your cart!`, { //sender meldingen
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-violet-200 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <Image src={data.image} className="h-28 rounded-lg" alt="" width={50} height={50} />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-purple-700 font-semibold">
              {data.title}
            </h1>
            <p>${data.price}</p>
          </div>
        </div>
        <div
          onClick={removeItemFromCart} //Hvis klikket funksjonen "removeItemFromCart" aktiveres.
          className="bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        >
          <Delete className="text-gray-800" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
