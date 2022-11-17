import { Separator } from 'components/Separator';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-xs flex flex-col items-center justify-center mt-10">
      <Separator />
      <p className="mt-4 text-dark-700">
        © Alegherix 2022. All rights reserved.
      </p>
    </footer>
  );
};
