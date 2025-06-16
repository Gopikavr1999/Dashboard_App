import Sidebar from './Sidebar';
import Navbar from './Navbar';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-screen min-h-screen bg-[#f8f9f5] dark:bg-gray-950 text-green-900 dark:text-green-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 mt-20 ml-64">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
