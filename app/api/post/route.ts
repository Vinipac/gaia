/* eslint-disable import/prefer-default-export */
import prisma from '@/lib/prisma.ts';
import slugify from 'slugify';

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const slug = slugify(title);
  console.log('abcdefghijkl');
  const res = await prisma.post.create({
    data: {
      title,
      slug,
      content,
    },
  });

  return Response.json(res);
}
