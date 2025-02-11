import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HowToServePage from "../HowToServePage";
import TimelinePage from "../TimelinePage";
import AboutPage from "../AboutPage";
import PricePage from "../PricePage";
import HelpPage from "../HelpPage";
import HelpBlogPage from "../HelpBlogPage";
import BlogsPage from "../BlogsPage";
import BlogPage from "../BlogPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import PrivacyPolicyPage from "../PrivacyPolicyPage";
import TermsConditionsPage from "../TermsConditionsPage";

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
    path: "/timeline",
    element: <TimelinePage />
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
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />
  },
  {
    path: "/terms-and-conditions",
    element: <TermsConditionsPage />
  },
])

export default router;