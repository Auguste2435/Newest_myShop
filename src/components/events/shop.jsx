import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ShopPage = ({ data,ev }) => {
    return (
        <div>
            <h1 className={ev.title}>All Results</h1>
            <div className={ev.price}>
                {data?.map((ev) => (
                    <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                        <a className="card">
                            <Image id="foo" alt="logo" src={'/images/shopping-cart.png'} width={50} height={50}></Image>
                            <Image src={ev.image} alt={ev.title} width={500} height={500} /> <h2>{ev.title} </h2>

                        </a>

                    </Link>
                ))}
            </div>

        </div>
    );

};
export default ShopPage;