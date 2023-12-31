import Link from 'next/link';

async function getData() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/postsasas',
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) throw new Error('Unable to Fetch');

  return response.json();
}

export const metadata = {
  title: 'Blog | Next App',
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
