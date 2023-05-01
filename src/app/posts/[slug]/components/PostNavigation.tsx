import Link from 'next/link';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    <article className="flex mt-10 ">
      {prevPost && (
        <Link className="block w-full " href={`/posts/${prevPost.path}`}>
          <div
            className="flex justify-between items-center h-40 px-10 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/posts/${prevPost.path}.png)`,
            }}
          >
            <FaArrowLeft className="text-4xl text-amber-400" />
            <div>
              <p className="text-2xl font-bold text-slate-100">
                {prevPost?.title}
              </p>
              <p className="text-sm font-semibold text-slate-100">
                {prevPost?.description}
              </p>
            </div>
          </div>
        </Link>
      )}
      {nextPost && (
        <Link className="block w-full " href={`/posts/${nextPost.path}`}>
          <div
            className="flex justify-between items-center h-40 px-10 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/posts/${nextPost.path}.png)`,
            }}
          >
            <div>
              <p className="text-2xl font-bold text-slate-100">
                {nextPost?.title}
              </p>
              <p className="text-sm font-semibold text-slate-100">
                {nextPost?.description}
              </p>
            </div>
            <FaArrowRight className="text-4xl text-amber-400" />
          </div>
        </Link>
      )}
    </article>
  );
}
