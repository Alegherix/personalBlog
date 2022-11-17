import { Separator } from 'components/Separator';
import { SocialMediaGroup } from 'components/SocialMediaGroup';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import Link from 'next/link';
import React from 'react';
import { archivo } from 'utils/fonts';

export const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 darkmode z-10">
      <nav className="flex items-center justify-between w-full h-20">
        <Link href="/">
          <span className={archivo.className}>Alegherix</span>
        </Link>
        <SocialMediaGroup />
        {/* <Link href="/posts">Posts</Link> */}
        <ThemeSwitcher />
      </nav>
      <Separator />
    </div>
  );
};
