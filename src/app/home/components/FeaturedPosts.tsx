import PostsGrid from '@/components/PostsGrid';

import { getFeaturedPosts } from '@/services/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mt-20 mb-10">
      <h2 className="text-xl font-semibold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
