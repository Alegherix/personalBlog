import { Heading } from 'components/Heading';
import Link from 'next/link';
import React from 'react';
import { archivo } from 'utils/fonts';
import { clsx } from 'clsx';
import { IconArrowNarrowRight } from '@tabler/icons';

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
    <article>
      <Link
        className={'group flex flex-col gap-2 max-w-screen-sm group p-4'}
        href={`/posts/${slug}`}
      >
        <Heading as="h2">I disabled notifications & you should to!</Heading>
        <Heading as="h3" variant="Secondary">
          The remarkable things i discovered when disabling notifications
        </Heading>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum
          facilis tempora corrupti debitis quis vitae eum facere a perspiciatis
          laboriosam quod fugit amet dolores iure dolore placeat alias,
          praesentium similique nulla doloremque magni! Maiores, perferendis?
          Reiciendis totam sint odit.
        </p>
        <span
          className={clsx(
            archivo.className,
            'group-hover:text-heaven-500 transitionAnimation flex gap-1 items-center'
          )}
        >
          Read more
          <IconArrowNarrowRight
            className="text-heaven-500 hidden group-hover:block animate-fadeAndBounce"
            size={20}
          />
        </span>
      </Link>
    </article>
  );
};
