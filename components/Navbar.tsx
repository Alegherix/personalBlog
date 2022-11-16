import { Separator } from 'components/Separator';
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
      <Separator className="mb-20" />
    </>
  );
};
