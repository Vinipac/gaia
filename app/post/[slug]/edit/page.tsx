import {
  Paper,
} from '@mantine/core';
import Editor from './editor';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-prose flex-col items-center justify-between bg-gray-300">
      <Paper shadow="xs" p="xl" className="max-w-prose">
        <Editor />
      </Paper>
    </main>
  );
}
