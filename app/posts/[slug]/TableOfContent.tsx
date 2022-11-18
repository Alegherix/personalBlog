import { Heading } from 'components/Heading';
import Link from 'next/link';
import React from 'react';

const mockSections: string[] = [
  'Introduction',
  'Section 1',
  'Section 2',
  'Section 3',
  'Section 4',
  'Section 5',
];

type TableOfContentProps = {
  headings: RegExpMatchArray | null;
};

export const TableOfContent: React.FC<TableOfContentProps> = ({ headings }) => {
  return (
    <aside className="max-lg:hidden min-w-[200px] uppercase sticky right-0 top-40 self-start">
      <nav className=" flex flex-col">
        <h4>Table of Contents</h4>
        <ul className="flex flex-col gap-2 mt-3">
          {headings?.map((section) => (
            <li className="text-xs textTransform" key={section}>
              <Link key={section} href={`#${section}`}>
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
