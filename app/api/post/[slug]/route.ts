/* eslint-disable import/prefer-default-export */
import prisma from '@/lib/prisma.ts';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await prisma.post.findFirst({
    where: {
      slug,
    },
  });
  return Response.json(res);
}
