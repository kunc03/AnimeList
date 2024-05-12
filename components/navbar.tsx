import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="fixed w-full py-7 md:px-10 px-5 flex md:flex-row sm:flex-row flex-col justify-between items-center text-slate-950 md:gap-10 sm:gap-5 gap-2 z-50 bg-gradient-to-t from-slate-400">
      <Link href="/" className="poetsen-one-regular text-3xl font-bold ">
        BAGANIME
      </Link>
      <div className="w-[50%]">
        <input onChange={handleSearch} type="text" className="rounded-full px-4 py-3 w-full outline-none focus:ring-1 focus:ring-sky-950" />
      </div>
      <div className="flex md:justify-between justify-center items-center md:gap-5 gap-2">
        <Link href="/cart" className="relative rounded-full hover:text-sky-700 px-1 duration-300">
          List A - Z
        </Link>
        <Link href="/signin" className="rounded-full hover:text-sky-700 px-1 duration-300">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
