import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="bg-white dark:bg-[#101828] text-black dark:text-white antialiased min-h-screen transition-colors duration-200">
      <Header />

      <main id="main-content" className="pt-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
