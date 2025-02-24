import { Request, Response } from 'express';
import { getAllBlogs } from '../models/Blog';

export async function getBlogs(req: Request, res: Response) {
  try {
    const blogs = await getAllBlogs();
    res.status(200).json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
} 