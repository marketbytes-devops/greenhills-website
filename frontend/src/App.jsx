import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Stay from './pages/Stay';
import Eat from './pages/Eat';
import Gather from './pages/Gather';
import Blog from './pages/Blog';
import Explore from './pages/Explore';
import Gallery from './pages/Gallery';
import BlogDetail from './pages/Blog/BlogDetail';
import NotFound from './pages/NotFound';
import { ModalProvider } from './context/ModalProvider';
import ThankYou from './pages/ThankYou';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

const pages = [
  { link: '/', name: Home },
  { link: 'about', name: About },
  { link: 'stay/:slug', name: Stay },
  { link: 'eat/:slug', name: Eat },
  { link: 'gather/:slug', name: Gather },
  { link: 'blogs', name: Blog },
  { link: 'blogs/:id', name: BlogDetail },
  { link: 'explore', name: Explore },
  { link: 'gallery', name: Gallery },
  { link: 'terms-and-conditions', name: TermsConditions },
  { link: 'privacy-policy', name: PrivacyPolicy },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...pages.map((page) => ({
        path: page.link === '/' ? '/' : `/${page.link}`,
        element: <page.name />,
      })),
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/thank-you',
        element: <ThankYou />,
      },
    ],
  },
]);

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
}

export default App;