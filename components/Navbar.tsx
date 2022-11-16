import Link from 'next/link';
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <div className="bg-dark-700 w-screen">
          <Link href="/">
            <span>Alegherix</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
