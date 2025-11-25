import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { DarkModeProvider } from './hooks/useDarkMode';
import { router } from './routes';

function App() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
        <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading…</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
