'use client';

import { Heading } from 'components/Heading';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center flex-col">
      <Heading as="h1">404</Heading>
      <Heading as="h2">Page not found</Heading>
      <Link className="textTransform mt-4" href="/">
        Go back to the main Page
      </Link>
    </div>
  );
}
