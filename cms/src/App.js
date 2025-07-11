import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Home from "./pages/CMS/Home";
import Blogs from "./pages/CMS/Blog";
import Contact from "./pages/EMS";
import About from "./pages/CMS/About";
import Gallery from "./pages/CMS/Gallery";
import Explore from "./pages/CMS/Explore";
import Stay from "./pages/CMS/Stay";
import Eat from "./pages/CMS/Eat";
import Gather from "./pages/CMS/Gather";
import SMM from "./pages/SMM";
import EMS from "./pages/EMS";
import PrivacyPolicy from "./pages/CMS/PrivacyPolicy";
import TermsConditions from "./pages/CMS/TermsConditions";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login setIsAuthenticated={setIsAuthenticated} />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Layout
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/cms/home",
          element: <Home />,
        },
        {
          path: "/cms/about",
          element: <About />,
        },
        {
          path: "/cms/stay",
          element: <Stay />,
        },
        {
          path: "/cms/eat",
          element: <Eat />,
        },
        {
          path: "/cms/gather",
          element: <Gather />,
        },
        {
          path: "/cms/blog",
          element: <Blogs />,
        },
        {
          path: "/cms/explore",
          element: <Explore />,
        },
        {
          path: "/cms/gallery",
          element: <Gallery />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/social-media-management",
          element: <SMM />,
        },
        {
          path: "/enquiry-management",
          element: <EMS />,
        },
        {
          path: "/cms/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/cms/terms-and-conditions",
          element: <TermsConditions />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
