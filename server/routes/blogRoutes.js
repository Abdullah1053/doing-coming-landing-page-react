import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET route to fetch all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error retrieving blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs data' });
  }
});

export default router; 