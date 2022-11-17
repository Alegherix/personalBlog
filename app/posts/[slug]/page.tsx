import { Content } from 'app/posts/[slug]/Content';
import { TableOfContent } from 'app/posts/[slug]/TableOfContent';
import React from 'react';

export default function page() {
  return (
    <div className="relative min-h-[200vh] flex">
      <Content />
      <TableOfContent />
    </div>
  );
}
