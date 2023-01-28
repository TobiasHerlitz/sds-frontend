import { createBrowserRouter } from 'react-router-dom';
import { Landing, About, NotFound, Topics } from '@routes';
import { Root } from '@components';

export const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      path: '',
      element: <Landing />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'topics',
      element: <Topics />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
}
]);
