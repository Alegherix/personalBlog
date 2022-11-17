import { Separator } from 'components/Separator';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-xs absolute w-full bottom-0 flex flex-col items-center justify-center ">
      <Separator />
      <p className="my-4 text-dark-700">
        © Alegherix 2022. All rights reserved.
      </p>
    </footer>
  );
};
