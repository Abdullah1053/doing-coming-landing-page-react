import express from 'express';
import blogRoutes from './routes/blogRoutes.js'; // importing our blog routes
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

// Mount API routes under a prefix (e.g., /api)
app.use('/api', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 