import { getFormatedSlug, getSinglePost } from 'utils/getMarkdownData';

export default async function Head({ params }: { params: { slug: string } }) {
  const { frontmatter } = getSinglePost(
    getFormatedSlug(params.slug),
    './markdown'
  );

  return (
    <>
      <title>{frontmatter.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={frontmatter.description} />
    </>
  );
}
