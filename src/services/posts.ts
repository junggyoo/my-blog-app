import { readFile } from 'fs/promises';
import path from 'path';

import { Post, PostData } from '@/types/posts';

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data/posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPost(filename: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data/posts', `${filename}.md`);
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === filename)
  );

  if (!metadata)
    throw new Error(`${filename}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
}

export async function getPostNavigation(filename: string): Promise<{
  prevPost: Post | null;
  nextPost: Post | null;
}> {
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex((post) => post.path === filename);

  const prevPost = posts[currentIndex - 1] ?? null;
  const nextPost = posts[currentIndex + 1] ?? null;

  return { prevPost, nextPost };
}
