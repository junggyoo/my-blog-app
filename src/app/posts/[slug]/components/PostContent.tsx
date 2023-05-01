import { AiOutlineCalendar } from 'react-icons/ai';
import MarkdownViewer from './MarkdownViewer';
import { PostData } from '@/types/posts';

interface PostContentProps {
  post: PostData;
}

export default function PostContent({ post }: PostContentProps) {
  const { title, description, content, date } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-700">
        <AiOutlineCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-99 border-2 border-sky-700 mt-4  mb-8" />
      <MarkdownViewer content={content} />
    </section>
  );
}
