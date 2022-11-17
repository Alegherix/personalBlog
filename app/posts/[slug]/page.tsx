import { TableOfContent } from 'app/posts/[slug]/TableOfContent';
import { Heading } from 'components/Heading';
import { Separator } from 'components/Separator';
import ReactMarkdown from 'react-markdown';
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
  } catch (error: any) {
    return <ErrorComponent error={error} />;
  }

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
          <ReactMarkdown className="prose lg:prose-xl dark:prose-invert">
            {myContent}
          </ReactMarkdown>
        </div>
        <TableOfContent />
      </section>
    </article>
  );
}
