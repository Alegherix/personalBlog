import React from 'react';
import { clsx } from 'clsx';

type SeparatorProps = {
  className?: string;
};

export const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return <div className={clsx('h-[1px] w-full bg-dark-700', className)} />;
};
