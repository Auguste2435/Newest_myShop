


import Link from 'next/link';
import Image from 'next/image';
import React from "react";




export const CartPage = ({ data}) => (


  <div className="home_body">
    <div className="products-wrapper">
      <div className="products">
        {data?.map((ev) => (

          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <a className="card" href={`/events/${ev.id}`}>
              <div className="image">
                <Image width={600} height={400} alt={ev.title} src={ev.image} />
              </div>



            </a>


          </Link>

        ))}
      </div>
    </div>
  </div>
)