import Link from 'next/link';
import React from 'react';
import { archivo } from 'utils/fonts';

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20">
        <Link href="/">
          <span className={archivo.className}>Alegherix</span>
        </Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <div className="h-[2px] rounded-md bg-dark-700 w-full mt-4 mb-20" />
    </>
  );
};
