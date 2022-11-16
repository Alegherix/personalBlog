import { ElementType } from 'react';
import { Font } from 'types/shared';
import { archivo, fontMap } from 'utils/fonts';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Variant = 'Primary' | 'Secondary' | 'Tertiary';

interface HeadingProps {
  children: React.ReactNode;
  as?: ElementType & Headings;
  font?: Font;
  variant?: Variant;
  className?: string;
}

const colorMap: Record<Variant, string> = {
  Primary: 'white',
  Secondary: 'dark70',
  Tertiary: 'whatever',
};

export const Heading: React.FC<HeadingProps> = ({
  as: Tag = 'h1',
  font = 'Roboto',
  variant = 'Primary',
  className,
  children,
}) => {
  const currentFontClass =
    Tag === 'h1' || Tag === 'h2' ? archivo.className : fontMap[font];
  const textColor = colorMap[variant];

  return (
    <Tag className={`${currentFontClass} text-${textColor} ${className}`}>
      {children}
    </Tag>
  );
};
