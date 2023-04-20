'use client';

import { PostCard } from '@/components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  {
    id: 4,
    title: 'Hello World4',
    subTitle: 'This is my third post',
    category: 'Life',
    date: '2021-08-03',
    thumbnail: '/images/blog-thumbnail1.jpeg',
  },
  {
    id: 5,
    title: 'Hello World5',
    subTitle: 'This is my third post',
    category: 'Life',
    date: '2021-08-03',
    thumbnail: '/images/blog-thumbnail2.jpeg',
  },
  {
    id: 6,
    title: 'Hello World6',
    subTitle: 'This is my third post',
    category: 'Life',
    date: '2021-08-03',
    thumbnail: '/images/blog-thumbnail3.jpeg',
  },
  {
    id: 7,
    title: 'Hello World7',
    subTitle: 'This is my third post',
    category: 'Life',
    date: '2021-08-03',
    thumbnail: '/images/blog-thumbnail1.jpeg',
  },
];

export default function YouMayLikeSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="my-10">
      <h2 className="text-lg font-semibold">You may like</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay
        autoPlaySpeed={3000}
      >
        {POSTS.map((post) => (
          <PostCard
            className="min-[375px]:m-0 md:mr-3 md:my-3"
            post={post}
            slug={post.id.toString()}
          />
        ))}
      </Carousel>
    </section>
  );
}
