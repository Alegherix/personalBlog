import { BlogCard } from 'components/BlogCard';
import { Heading } from 'components/Heading';

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center">
        <BlogCard slug="Disabled Notifications" />
      </section>
    </main>
  );
}
