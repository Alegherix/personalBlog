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
    <aside className="max-lg:hidden sticky right-0 top-0">
      <nav className=" flex flex-col">
        <Heading as="h2">Table of Contents</Heading>
        {mockSections.map((section) => (
          <Link key={section} href={`#${section}`}>
            {section}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
