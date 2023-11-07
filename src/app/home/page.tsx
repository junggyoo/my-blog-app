import FeaturedPosts from './components/FeaturedPosts';
import Hero from './components/Hero';
import YouMayLikePosts from './components/YouMayLikePosts';

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <YouMayLikePosts />
    </main>
  );
}
