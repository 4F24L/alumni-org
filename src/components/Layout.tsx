
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F1]">
      <Navbar />
      <main className="flex-1 mt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
