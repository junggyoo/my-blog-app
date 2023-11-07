import Image from 'next/image';

import PostNavigation from './components/PostNavigation';
import PostContent from './components/PostContent';

import { getPost } from '@/services/posts';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPost(slug);

  return (
    <main className="rounded-2xl bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <PostNavigation prevPost={post.prevPost} nextPost={post.nextPost} />
    </main>
  );
}
