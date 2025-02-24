import express from 'express';
import blogRoutes from './routes/blogRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test route to verify the server is up
app.get('/', (req, res) => {
  res.send('Hello from Express API!');
});

// Mount API routes under /api (assuming blogRoutes has endpoints)
app.use('/api', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 