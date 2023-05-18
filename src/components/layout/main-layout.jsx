import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
// import { SessionProvider, useSession } from 'next-auth/react';

const MainLayout = ({ children }) => {

  return ( //Opsetning til netsiden, Header og Footer er nettsidens children elementer
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};


export default MainLayout;
