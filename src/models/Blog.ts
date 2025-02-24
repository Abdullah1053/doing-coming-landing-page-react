import { PrismaClient, Blog } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllBlogs(): Promise<Blog[]> {
  const blogs = await prisma.blog.findMany({
    orderBy: { created_at: 'desc' }
  });
  return blogs;
} 