'use server';

import prisma from '@/lib/prisma.ts';
import slugify from 'slugify';
import { revalidatePath } from 'next/cache';

interface Post {
    title: string,
    content: string,
    id: string,
    slug: string
  }

export async function upsertPost({
  id, title, content, slug,
}: Post) {
  console.log(id);
  const newSlug = slugify(title as string);
  const res = await prisma.post.upsert({
    where: {
      id: id || '',
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

  revalidatePath(`/post/${slug}`, 'page');
  console.log(res);
}

export async function getPostBySlug(slug: string) {
  const res: Post = await prisma.post.findFirst({
    where: {
      slug,
    },
  });
  console.log(res);
  return res;
}
