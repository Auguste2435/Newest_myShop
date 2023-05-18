// import MainLayout from '../src/components/layout/main-layout';
import '../styles/globals.css';
import '../styles/general.sass';
import React from 'react';

import { store } from '../redux/store';
import { Provider } from 'react-redux';

import { Footer } from '../src/components/footer/footer';
import { Header } from '../src/components/header/header'

import Search from "./Search"

import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";

import { SessionProvider, useSession } from 'next-auth/react';
// import { StoreProvider } from '../utils/Store';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps, session }) { 
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <div className="wrapper">
            <Header />
            <Component {...pageProps} /> 
            <Footer />
            <Search />
            <SnackbarProvider
              TransitionComponent={Slide}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            />
          </div>
        </Provider>
      </SessionProvider>
    </>
  );
}

// function Auth({ children, adminOnly }) {
//   const router = useRouter();
//   const { status, data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       router.push('/unauthorized?message=login required');
//     },
//   });
//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }
//   if (adminOnly && !session.user.isAdmin) {
//     router.push('/unauthorized?message=admin login required');
//   }

//   return children;
// }
export default MyApp;
// NEXT_PUBLIC_ALGOLIA_APPLICATION_ID=I23UOMGIT6

// NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY=ceee7855d59500633d2330661a821c2b
// ALGOLIA_ADMIN_KEY=51e316bd94927e640b3a4e43305cb360

// MONGO_URI="mongodb+srv://PjHarvey:Aleliuja2244@atlascluster.va00fxn.mongodb.net/Login?retryWrites=true&w=majority"

// NEXT_PUBLIC_APP_URL=http://localhost:3000

// NEXTAUTH_URL=http://localhost:3000

// NEXTAUTH_SECRET=somethingsecret
