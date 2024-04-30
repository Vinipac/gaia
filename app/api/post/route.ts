/* eslint-disable import/prefer-default-export */
import prisma from '@/lib/prisma.ts';
import slugify from 'slugify';
import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const {
    title, content, id, slug,
  } = await request.json();
  const newSlug = slugify(title);
  const res = await prisma.post.upsert({
    where: {
      id,
    },
    create: {
      slug: newSlug,
      title,
      content,
    },
    update: {
      title,
      content,
    },
  });

  return Response.json(res);
}
