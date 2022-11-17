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

export const TableOfContent: React.FC = () => {
  return (
    <aside className="max-lg:hidden min-w-[200px] uppercase sticky right-0 top-40 self-start">
      <nav className=" flex flex-col">
        <Heading as="h4">Table of Contents</Heading>
        <ul className="flex flex-col gap-2 mt-3">
          {mockSections.map((section) => (
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
