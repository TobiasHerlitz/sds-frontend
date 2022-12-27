import style from './Container.style';

export const Container = ({ children }) => {
  return <style.root>{children}</style.root>;
}
