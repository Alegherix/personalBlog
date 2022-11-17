import { Content } from 'app/posts/[slug]/Content';
import { TableOfContent } from 'app/posts/[slug]/TableOfContent';
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

  try {
    const { frontmatter, content } = getSinglePost(
      getFormatedSlug(slug),
      './markdown'
    );
  } catch (error: any) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="relative min-h-[200vh] flex">
      <Content />
      <TableOfContent />
    </div>
  );
}
