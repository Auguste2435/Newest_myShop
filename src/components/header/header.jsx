import Link from 'next/link';
// import Image from 'next/image';
// import Cart from "../../../pages/_app"
// import { handleClientScriptLoad } from 'next/script';
import { useSelector } from 'react-redux';

import { ShoppingBasket } from "@mui/icons-material";
// import { NavLink } from "react-router-dom";

// import { Nav } from 'rsuite';

// import Carta from "../../../pages/Carta"
import Search from "../../../pages/Search"
// import { signOut, useSession } from 'next-auth/react';
// import Head from 'next/head';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

// import { useRouter } from 'next/router';
// import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
// import { InstantSearch, SearchBox, Hits }
//   from "react-instantsearch-dom";

// import algoliasearch from "algoliasearch/lite";


export const Header = () => {

  // const { status, data: session } = useSession();

  // const { state, dispatch } = useContext(Store);
  const { cart } = useSelector((state) => state);

  return (
    <header>
      <Search />
      <div>
        <div className="topNav">
          <Link href="/" passHref>
            {/* <Image id="foo" alt="logo" src={'/images/logo_black.png'} width={50} height={50} /> */}
            <a>Home</a>
          </Link>
          <nav >
            <ul className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">

              <Link href="/events" passHref>
                <a>   Products </a>
              </Link>

              <li>
                <Link href="/about-us" passHref>
                  <a> About us</a>
                </Link>
              </li>
              <li   >
                <Link href="/login" passHref>
                  <a> Login</a>
                </Link>
              </li>
              <li  >
                <Link href="/register" passHref>
                  <a> Signup</a>
                </Link>
              </li>
              <li >
                <Link href="/" passHref>
                  <a>Home</a>
                </Link>
              </li>
              <div className="relative">
                <li>
                  <Link href="/Carta" passHref>
                    <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />
                  </Link>
                </li>
                {cart.length > 0 && (
                  <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                    {cart.length}
                  </div>
                )}
              </div>
            </ul>
          </nav>
        </div>
        <p className="title">Food shop</p>
      </div>
    </header>
  );
};
