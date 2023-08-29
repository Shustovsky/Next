import { FormEventHandler, useState } from 'react';
import { IPost } from '@/app/blog/page';
import { getPostsBySearch } from '@/services/getPosts';

type Props = {
  onSearch: (value: IPost[]) => void;
};

export const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
