import { Heading } from 'components/Heading';
import Link from 'next/link';
import React from 'react';
import { archivo } from 'utils/fonts';

type BlogCardProps = {
  title?: string;
  description?: string;
  text?: string;
  slug: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({
  description,
  slug,
  text,
  title,
}) => {
  return (
    <article className="bg-dark-800 flex flex-col gap-2 max-w-screen-sm">
      <Heading as="h2">I disabled notification & you should to! </Heading>
      <Heading as="h3" variant="Secondary">
        A post about what I experienced disabling all notifications
      </Heading>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum
        facilis tempora corrupti debitis quis vitae eum facere a perspiciatis
        laboriosam quod fugit amet dolores iure dolore placeat alias,
        praesentium similique nulla doloremque magni! Maiores, perferendis?
        Reiciendis totam sint odit.
      </p>

      <Link className={`${archivo.className} w-fit`} href={`/posts/${slug}`}>
        Read more
      </Link>
    </article>
  );
};
