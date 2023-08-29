async function getDate(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

//id должен совпадать с названием папки

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getDate(id);

  return {
    title: `${post.title} | Next App`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getDate(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
