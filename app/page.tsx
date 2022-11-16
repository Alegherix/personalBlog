import { BlogCard } from 'components/BlogCard';
import { Heading } from 'components/Heading';

export default function Home() {
  return (
    <main>
      <Heading as="h1">Welcome to my blog</Heading>
      <BlogCard slug="Disabled Notifications" />
    </main>
  );
}
