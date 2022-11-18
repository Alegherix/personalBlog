import { TableOfContent } from 'app/posts/[slug]/TableOfContent';
import { Heading } from 'components/Heading';
import ReactMarkdown from 'react-markdown';
import { ElementContent } from 'react-markdown/lib/ast-to-react';
import {
  getAllPosts,
  getFormatedSlug,
  getSinglePost,
} from 'utils/getMarkdownData';
import ErrorComponent from './error';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function page({
  params,
}: {
  params: { slug: string; unformatedSlug: string };
}) {
  const { slug } = params;
  let myContent;
  let frontmatterContent;
  try {
    const { frontmatter, content } = getSinglePost(
      getFormatedSlug(slug),
      './markdown'
    );
    myContent = content;
    frontmatterContent = frontmatter;
  } catch (error) {
    return <ErrorComponent error={error as Error} />;
  }
  // All type of headings
  const regex = new RegExp(/(?<=# ).*/g);
  const headings = myContent.match(regex);

  return (
    <article>
      <section className="text-center mb-20">
        <Heading as="h1">{frontmatterContent.title}</Heading>
        <Heading as="h3" className="lg:text-xl" variant="Secondary">
          {frontmatterContent.description}
        </Heading>
      </section>
      <section className="relative flex gap-8 justify-around">
        <div className="flex flex-col max-w-screen-sm">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => {
                const newId = node.children[0] as { value: string };
                return <h2 id={newId.value} {...props} />;
              },
            }}
            className="prose lg:prose-xl dark:prose-invert"
          >
            {myContent}
          </ReactMarkdown>
        </div>
        <TableOfContent headings={headings} />
      </section>
    </article>
  );
}
