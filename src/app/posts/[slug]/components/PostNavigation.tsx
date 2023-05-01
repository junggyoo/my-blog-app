import AdjascentPostCard from './AdjacentPostCard';

import { Post } from '@/types/posts';

interface PostNavigationProps {
  prevPost: Post | null;
  nextPost: Post | null;
}

export default function PostNavigation({
  prevPost,
  nextPost,
}: PostNavigationProps) {
  return (
    <section className="flex shadow-md">
      {prevPost && <AdjascentPostCard post={prevPost} type="prev" />}
      {nextPost && <AdjascentPostCard post={nextPost} type="next" />}
    </section>
  );
}
