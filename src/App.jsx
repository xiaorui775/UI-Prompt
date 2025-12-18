import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { LanguageProvider } from './hooks/useLanguage';
import { DarkModeProvider } from './hooks/useDarkMode';
import { router } from './routes';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <DarkModeProvider>
          <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading…</div>}>
            <RouterProvider router={router} />
          </Suspense>
        </DarkModeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
