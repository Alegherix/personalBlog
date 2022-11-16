import { ElementType } from 'react';
import { archivo, fontMap } from 'utils/fonts';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type Font = 'archivo' | 'roboto';

interface HeadingProps {
  children: React.ReactNode;
  as?: ElementType & Headings;
  font?: Font;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Tag = 'h1',
  font = 'roboto',
  children,
}) => {
  const currentFontClass =
    Tag === ('h1' || 'h2') ? archivo.className : fontMap[font];

  return <Tag className={currentFontClass}>{children}</Tag>;
};
