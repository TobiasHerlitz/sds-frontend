import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from './router';
import { Navbar } from './components';
import { GlobalStyle, theme } from './style';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
        <RouterProvider router={router} />
    </ThemeProvider>
  );
};
