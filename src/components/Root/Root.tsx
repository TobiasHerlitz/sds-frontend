import { Outlet } from 'react-router-dom';
import { Navbar, ThemeToggleIcon } from '@components';

export const Root = () => {
  return (
    <>
      <Navbar />
      {/*<ThemeToggleIcon />*/}
      <Outlet />
    </>
  );
};
