import { PostCard } from '@/components';
import MultiCarousel from './MultiCarousel';

import { getNonFeaturedPosts } from '@/services/posts';

export default async function YouMayLikePosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-10">
      <h2 className="text-xl font-semibold">You may like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
