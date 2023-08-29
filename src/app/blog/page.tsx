'use client';
import { useEffect, useState } from 'react';
import { getAllPosts } from '@/services/getPosts';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';

export interface IPost {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
