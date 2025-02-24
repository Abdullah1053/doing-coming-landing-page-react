import express from "express";
import blogsRouter from "./routes/blogRoutes";

const app = express();

// Middleware to parse JSON bodies (if needed)
app.use(express.json());

// Mount the blogs routes under the /api prefix.
app.use("/api", blogsRouter);

// Other routes can go here...

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
