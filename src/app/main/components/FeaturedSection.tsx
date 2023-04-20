import PostCard from '@/components/PostCard';

const POSTS = [
  {
    id: 1,
    title: 'Hello World1',
    subTitle: 'This is my first post',
    category: 'Life',
    date: '2021-08-01',
    thumbnail: '/images/blog-thumbnail1.jpeg',
  },
  {
    id: 2,
    title: 'Hello World2',
    subTitle: 'This is my second post',
    category: 'Life',
    date: '2021-08-02',
    thumbnail: '/images/blog-thumbnail2.jpeg',
  },
  {
    id: 3,
    title: 'Hello World3',
    subTitle: 'This is my third post',
    category: 'Life',
    date: '2021-08-03',
    thumbnail: '/images/blog-thumbnail3.jpeg',
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {POSTS.map((post) => (
            <PostCard
              className="h-96"
              key={post.id}
              post={post}
              slug={post.id.toString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
