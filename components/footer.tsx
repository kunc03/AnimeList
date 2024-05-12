import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full p-10 bg-sky-600 flex justify-between items-center">
      <h1>Footer</h1>
      <Link href="/signin">Facebook</Link>
    </div>
  );
};

export default Footer;
