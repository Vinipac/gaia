import {
  Text, Paper, Image, Title,
} from '@mantine/core';
import NextImage from 'next/image';
import BoatImage from '../../../images/bg-7.png';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <main className="flex min-h-screen min-w-prose flex-col items-center justify-between bg-gray-300">
      <Paper shadow="xs" p="xl" className="max-w-prose">
        <div className="pb-3">
          <Title order={1}> This is a title</Title>
          <Text> This is a subtitle </Text>
        </div>
        <div className="pb-1">
          <Image component={NextImage} src={BoatImage} alt="Boat Image" w="auto" fit="contain" className="py-1" />
          <Text ta="center" size="xm" c="gray">Image text</Text>
        </div>
        <Text className="py-1">Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow.
        </Text>
        <Text>
          Slug:
          {' '}
          {slug}
        </Text>
      </Paper>
    </main>
  );
}
