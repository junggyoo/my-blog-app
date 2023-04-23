import Image from 'next/image';
import Link from 'next/link';

import { CategoryBadge } from '@/components';

import { Post } from '@/types/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { date, title, description, category, path } = post;

  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          width={300}
          height={200}
          src={`/images/posts/${path}.png`}
          alt={title}
        />
        <div className="flex flex-col items-center  p-3">
          <time className="self-end text-sm text-gray-500">
            {date.toString()}
          </time>
          <h3 className="w-full truncate text-center text-lg font-semibold">
            {title}
          </h3>
          <p className="w-full truncate text-center">{description}</p>
          <CategoryBadge label={category} />
        </div>
      </article>
    </Link>
  );
}
