'use client';

import { useState } from 'react';

import PostsGrid from '@/components/PostsGrid';

import { Post } from '@/types/posts';
import Categories from './Categories';

interface FilterablePostsProps {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({
  posts,
  categories,
}: FilterablePostsProps) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_POSTS);

  const filtered =
    selectedCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="flex justify-between m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selectedCategory={selectedCategory}
        onCatetoryClick={handleFilter}
      />
    </section>
  );
}
