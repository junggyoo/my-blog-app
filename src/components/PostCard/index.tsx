'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CategoryBadge } from '@/components';

export interface Post {
  date: string;
  title: string;
  subTitle: string;
  category: string;
  thumbnail?: string;
}

interface PostCardProps {
  post: Post;
  slug: string;
  className?: string;
}

export default function PostCard({ post, slug, className }: PostCardProps) {
  const router = useRouter();

  const { date, title, subTitle, category, thumbnail } = post;
  return (
    <article
      className={`rounded-md shadow-md min-w-40 min-h-40 cursor-pointer ${className}`}
      onClick={() => router.push(`/posts/${slug}`)}
    >
      <Image
        className="h-60 rounded-t-md"
        width={500}
        height={300}
        src={thumbnail || ''}
        alt="thumbnail"
      />
      <div className="text-end mr-3">
        <time className="text-sm text-gray-500">{date}</time>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="">{subTitle}</p>
        <CategoryBadge label={category} />
      </div>
    </article>
  );
}
