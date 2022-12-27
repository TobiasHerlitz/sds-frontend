import { createBrowserRouter } from 'react-router-dom';
import { Landing, About, NotFound, Topics } from '/src/routes/';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/topics",
    element: <Topics />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);
