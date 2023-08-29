import { IPost } from '@/app/blog/page';
import Link from 'next/link';

type Props = {
  posts: IPost[];
};

export const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post: IPost) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
