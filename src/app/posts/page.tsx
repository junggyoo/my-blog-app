import FilterablePosts from './components/FilterablePosts';

import { getAllPosts } from '@/services/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();

  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <main>
      <FilterablePosts posts={posts} categories={categories} />
    </main>
  );
}
