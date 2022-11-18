import { ClientLinkSmoothScroll } from 'components/ClientLinkSmoothScroll';
import React from 'react';

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
              <ClientLinkSmoothScroll section={section} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
