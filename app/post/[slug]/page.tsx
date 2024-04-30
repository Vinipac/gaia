import {
  Text, Paper, Image, Title,
} from '@mantine/core';
import NextImage from 'next/image';
import parse from 'html-react-parser';
import BoatImage from '../../../images/bg-7.png';
import { getPostBySlug } from '../actions';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(`/api/post/${slug}`);

  // const post = await fetch(`localhost:3000/api/post/slug/${slug}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   next: {
  //     tags: [`post-${slug}`],
  //   },
  // }).then((response) => response.json());

  const post: Post = await getPostBySlug(slug);
  const { title, content } = post;

  return (
    <main className="flex min-h-screen min-w-prose flex-col items-center justify-between bg-gray-300">
      <Paper shadow="xs" p="xl" className="max-w-prose">
        <div className="pb-3">
          <Title order={1}>
            {' '}
            {`${title}`}
            {' '}
          </Title>
          <Text> This is a subtitle </Text>
        </div>
        <div className="pb-1">
          <Image component={NextImage} src={BoatImage} alt="Boat Image" w="auto" fit="contain" className="py-1" />
          <Text ta="center" size="xm" c="gray">Image text</Text>
        </div>
        {parse(content)}
      </Paper>
    </main>
  );
}
