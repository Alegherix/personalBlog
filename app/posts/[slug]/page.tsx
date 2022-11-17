import { Content } from 'app/posts/[slug]/Content';
import { TableOfContent } from 'app/posts/[slug]/TableOfContent';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ErrorComponent from './error';

const getPath = (folder: string) => {
  return path.join(process.cwd(), `/${folder}`); // Get full path
};

const getFileContent = (filename: string, folder: string) => {
  const POSTS_PATH = getPath(folder);
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8');
};

const getSinglePost = (slug: string, folder: string) => {
  const source = getFileContent(`${slug}.md`, folder);
  const { data: frontmatter, content } = matter(source);

  return {
    frontmatter,
    content,
  };
};

const MyErrorComp = () => {
  return <div>ello</div>;
};

const getAllPosts = (folder: string) => {
  const POSTS_PATH = getPath(folder);

  return fs
    .readdirSync(POSTS_PATH) // get files in directory
    .filter((path) => path.endsWith('.md')) // only .md files
    .map((fileName) => {
      // map over each file
      const source = getFileContent(fileName, folder); // retrieve the file contents
      const slug = fileName.replace(/\\.md?$/, ''); // get the slug from the filename
      const { data } = matter(source); // extract frontmatter
      return {
        frontmatter: data,
        slug: slug,
      };
    });
};
export async function generateStaticParams() {
  const posts = await getAllPosts('./markdown');

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
  console.log(slug);

  const newSlug = slug.replace(' ', '-').toLocaleLowerCase();
  try {
    const { frontmatter, content } = getSinglePost(newSlug, './markdown');
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
