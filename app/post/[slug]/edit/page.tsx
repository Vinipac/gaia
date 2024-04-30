import {
  Paper,
} from '@mantine/core';
import Editor from '../../editor.tsx';
import { getPostBySlug } from '../../actions.ts';

interface Post {
  title: string,
  content: string,
  id: string
}

export default async function EditPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // const post = await fetch(`http://localhost:3000/api/post/slug/${slug}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   next: { tags: [`post-${slug}`] },
  // }).then((response) => response.json());

  const post: Post = await getPostBySlug(slug);
  const { title, content, id } = post;

  return (
    <main className="flex min-h-screen min-w-prose flex-col items-center justify-between bg-gray-300">
      <Paper shadow="xs" p="xl" className="max-w-prose">
        <Editor defaultTitle={title} defaultContent={content} id={id} buttonText="Edit" />
      </Paper>
    </main>
  );
}
