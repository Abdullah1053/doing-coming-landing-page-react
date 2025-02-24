import { Router } from 'express';
import { getBlogs } from '../controllers/blogController';

const router = Router();

router.get('/blogs', getBlogs);

export default router; 