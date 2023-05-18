import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../src/components/CartItem";



const Carta = ({ }) => {

  const [totalAmount, setTotalAmount] = useState(0) //TotalAmount er sett til nå, mens setTotalAmount oppdaterer tilstanden
  const { cart } = useSelector((state) => state); //useSelector tar nåværende tilstanden

  useEffect(() => { //manages the side-effects in functional components
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0)); //går gjennom hele tabell og oppdaterer og returnerer verdien, det viser hvor mange produkter
    //det er i vognen
  }, [cart]);

  return (
    <>

      {cart.length > 0 ? ( //hvis vognens lengde er større enn null
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto"> //klasse css
            <div className="flex flex-col justify-center items-between p-2">
              {cart?.map((data) => { //går gjennom produkter
                return <CartItem key={data?.id} data={data} />;
              })}
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-semibold text-lg text-purple-800">
                  YOUR CART SUMMARY
                </h1>
                <p>
                  <span className="text-gray-700 font-semibold">
                    Total Items
                  </span>{" "}
                  : {cart.length}
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-semibold">
                    Total Amount
                  </span>{" "}
                  : ${totalAmount}
                </p>
                <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>

          </div>
        </>
      )}
    </>
  );
};


export default Carta;
