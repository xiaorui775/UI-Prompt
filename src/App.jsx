import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { router } from './routes';

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading…</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
