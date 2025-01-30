import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HowToServePage from "../HowToServePage";
import AboutPage from "../AboutPage";
import PricePage from "../PricePage";
import HelpPage from "../HelpPage";
import HelpBlogPage from "../HelpBlogPage";
import BlogsPage from "../BlogsPage";
import BlogPage from "../BlogPage";
import LoginPage from "../LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/how-to-serve",
    element: <HowToServePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/price",
    element: <PricePage />
  },
  {
    path: "/help",
    element: <HelpPage />
  },
  {
    path: "/help-blogs",
    element: <HelpBlogPage />
  },
  {
    path: "/blogs",
    element: <BlogsPage />
  },
  {
    path: "/blogs/:id",
    element: <BlogPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
])

export default router;