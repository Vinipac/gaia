import {
  Paper,
} from '@mantine/core';
import Editor from '../editor.tsx';

  interface Post {
    title: string,
    content: string
  }

export default async function NewPostPage() {
//   const { slug } = params;
//   const post = await fetch(`http://localhost:3000/api/post/${slug}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => response.json());

  return (
    <main className="flex min-h-screen min-w-prose flex-col items-center justify-between bg-gray-300">
      <Paper shadow="xs" p="xl" className="max-w-prose">
        <Editor buttonText="Post" />
      </Paper>
    </main>
  );
}
