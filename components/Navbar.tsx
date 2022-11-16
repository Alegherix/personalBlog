import Link from 'next/link';
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <div className="bg-dark70 w-screen">
          <Link href="/">
            <span>Alegherix</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
