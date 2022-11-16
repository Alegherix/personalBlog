import { Separator } from 'components/Separator';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-xs">
      <Separator className="my-20" />
      <p>© Alegherix 2022. All rights reserved.</p>
    </footer>
  );
};
