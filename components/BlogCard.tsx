import { Heading } from 'components/Heading';
import Link from 'next/link';
import React from 'react';
import { archivo } from 'utils/fonts';
import { clsx } from 'clsx';
import { IconArrowNarrowRight } from '@tabler/icons';

type BlogCardProps = {
  title: string;
  description: string;
  teaser: string;
  slug: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({
  description,
  slug,
  teaser,
  title,
}) => {
  return (
    <article>
      <Link
        className={'group flex flex-col gap-2 max-w-screen-md group p-2'}
        href={`/posts/${slug}`}
      >
        <Heading as="h2">{title}</Heading>
        <Heading as="h3" variant="Secondary" weight="Regular">
          {description}
        </Heading>
        <p className="mt-2">{teaser}</p>
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
