import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const getPath = (folder: string) => {
  return path.join(process.cwd(), `/${folder}`); // Get full path
};

export const getFileContent = (filename: string, folder: string) => {
  const POSTS_PATH = getPath(folder);
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8');
};

export const getSinglePost = (slug: string, folder: string) => {
  const source = getFileContent(`${slug}.md`, folder);
  const { data: frontmatter, content } = matter(source);

  return {
    frontmatter,
    content,
  };
};

export const getFormatedSlug = (slug: string) => slug.replace(' ', '-').replace('.md', '').toLocaleLowerCase();
export const getAllPosts = () => {
  const POSTS_PATH = getPath('markdown');

  return fs
    .readdirSync(POSTS_PATH) // get files in directory
    .filter((path) => path.endsWith('.md')) // only .md files
    .map((fileName) => {
      // map over each file
      const source = getFileContent(fileName, 'markdown'); // retrieve the file contents
      const slug = fileName.replace(/\\.md?$/, ''); // get the slug from the filename
      const { data } = matter(source); // extract frontmatter
      return {
        frontmatter: data,
        slug,
      };
    });
};