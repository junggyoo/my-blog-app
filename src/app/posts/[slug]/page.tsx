import Image from 'next/image';
import { AiOutlineCalendar } from 'react-icons/ai';

import MarkdownViewer from './components/MarkdownViewer';
import PostNavigation from './components/PostNavigation';

import { getPost, getPostNavigation } from '@/services/posts';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { title, content, description, date, path } = await getPost(
    params.slug
  );

  const { prevPost, nextPost } = await getPostNavigation(params.slug);

  return (
    <main className="rounded-2xl bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-700">
          <AiOutlineCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-99 border-2 border-sky-700 mt-4  mb-8" />
        <MarkdownViewer content={content} />
        <PostNavigation prevPost={prevPost} nextPost={nextPost} />
      </section>
    </main>
  );
}
