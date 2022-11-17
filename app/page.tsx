import { BlogCard } from 'components/BlogCard';
import { getAllPosts } from 'utils/getMarkdownData';

export default function Home() {
  const allPosts = getAllPosts();
  console.log(allPosts);

  return (
    <section className="flex items-center justify-center flex-col">
      {allPosts.map((post) => (
        <BlogCard
          teaser={post.frontmatter.teaser}
          key={post.slug}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          slug={post.slug}
        />
      ))}
    </section>
  );
}
