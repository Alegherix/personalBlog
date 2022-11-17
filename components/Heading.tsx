import { ElementType } from 'react';
import { DefaultColors } from 'tailwindcss/types/generated/colors';
import { Font } from 'types/shared';
import { archivo, fontMap } from 'utils/fonts';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';
import { clsx } from 'clsx';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Variant = 'Primary' | 'Secondary' | 'Tertiary';

interface HeadingProps {
  children: React.ReactNode;
  as?: ElementType & Headings;
  font?: Font;
  variant?: Variant;
  className?: string;
}

// type TailwindNumberKeys = keyof DefaultColors['slate'];
// type TailwindColors =
//   | `${keyof DefaultColors}-${TailwindNumberKeys}`
//   | keyof DefaultColors;
// type ThemeColors = `${'dark' | 'light'}-${TailwindNumberKeys}`;
// type MyColors = `text-${TailwindColors | ThemeColors}`;

const colorMap: Record<Variant, string> = {
  Primary: 'text-dark-900',
  Secondary: 'dark:text-dark-700 text-gray-',
  Tertiary: 'text-blue-300',
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
    <Tag className={clsx(currentFontClass, textColor, className)}>
      {children}
    </Tag>
  );
};
