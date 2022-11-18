import { clsx } from 'clsx';
import { ElementType } from 'react';
import { archivo } from 'utils/fonts';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Variant = 'Primary' | 'Secondary' | 'Tertiary';
type Weight = 'Black' | 'Regular';

interface HeadingProps {
  children: React.ReactNode;
  as?: ElementType & Headings;
  variant?: Variant;
  weight?: Weight;
  className?: string;
  idHeading?: boolean;
}

const colorMap: Record<Variant, string> = {
  Primary: 'text-dark-900',
  Secondary: 'text-dark-700',
  Tertiary: 'text-blue-300',
};

export const Heading: React.FC<HeadingProps> = ({
  as: Tag = 'h1',
  variant = 'Primary',
  weight = 'Black',
  className,
  children,
  idHeading,
}) => {
  const textColor = colorMap[variant];
  return (
    <Tag
      // id={idHeading ? JSON.stringify(children) : undefined}
      className={clsx(archivo.className, textColor, className)}
    >
      {children}
    </Tag>
  );
};
