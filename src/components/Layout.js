import {  useSession } from 'next-auth/react';
// import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
// import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import DropdownLink from './DropDownLink';
import { useRouter } from 'next/router';
// import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';

export default function Layout() {
  const { status, data: session } = useSession();


  // const [query, setQuery] = useState('');

  const router = useRouter();
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   router.push(`/search?query=${query}`);
  // };

  return (
    <>
      {status === 'loading' ? (
        'Loading'
      ) : session?.user ? (
        <Menu as="div" className="relative inline-block">
          <Menu.Button className="text-blue-600">
            {session.user.name}
          </Menu.Button>
          <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
            <Menu.Item>
              <DropdownLink className="dropdown-link" href="/profile">
                Profile
              </DropdownLink>
            </Menu.Item>
            <Menu.Item>
              <DropdownLink
                className="dropdown-link"
                href="/order-history"
              >
                Order History
              </DropdownLink>
            </Menu.Item>
            {session.user.isAdmin && (
              <Menu.Item>
                <DropdownLink
                  className="dropdown-link"
                  href="/admin/dashboard"
                >
                  Admin Dashboard
                </DropdownLink>
              </Menu.Item>
            )}
          </Menu.Items>
        </Menu>
      ) : (
        <Link href="/login" className="p-2">
          Login
        </Link>
      )}


    </>
  );
}