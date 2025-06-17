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


const pages = [
  { link: '/', name: Home },
  { link: 'about', name: About },
  { link: 'stay/:id', name: Stay },
  { link: 'eat/id', name: Eat },
  { link: 'gather/:id', name: Gather },
  { link: 'blogs', name: Blog },
  { link: 'explore', name: Explore },
  { link: 'gallery', name: Gallery },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: pages.map((page) => ({
      path: page.link === '/' ? '/' : `/${page.link}`,
      element: <page.name />,
    })),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;