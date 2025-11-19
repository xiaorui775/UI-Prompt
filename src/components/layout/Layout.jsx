import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="bg-white text-black antialiased">
      <Header />

      <main id="main-content" className="pt-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
