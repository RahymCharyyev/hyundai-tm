import React, { ReactNode } from 'react';
import Header from './Header';
import { Footer } from './Footer';

interface IProps {
  children: ReactNode;
}
export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
