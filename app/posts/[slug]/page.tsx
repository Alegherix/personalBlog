import ReactMarkdown from 'react-markdown';
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
  console.log('Slug in default page', params.slug);

  const { slug } = params;
  let myContent;
  try {
    const { content } = getSinglePost(getFormatedSlug(slug), './markdown');
    myContent = content;
  } catch (error: any) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="relative flex gap-8 justify-around">
      <div className="flex flex-col max-w-screen-sm">
        <ReactMarkdown className="prose lg:prose-xl dark:prose-invert">
          {myContent}
        </ReactMarkdown>
      </div>
      <TableOfContent />
    </div>
  );
}
