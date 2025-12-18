/**
 * LanguageLayout Component
 * Wrapper that syncs URL language with application state
 */

import { Outlet, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  isValidUrlLang,
  urlLangToInternal,
} from '../hooks/useLanguageFromUrl';
import { detectBrowserLanguage } from '../utils/i18n/detectBrowserLanguage';
import { LANG_TO_URL } from '../components/seo/seoConfig';

/**
 * Layout component that syncs URL language parameter with language context
 * Renders children (Outlet) with the correct language
 */
export function LanguageLayout() {
  const { lang } = useParams();
  const { language, setLanguageDirectly } = useLanguage();

  // Validate URL language
  const isValid = isValidUrlLang(lang);

  // Sync URL language with context
  const urlLanguage = isValid ? urlLangToInternal(lang) : null;

  useEffect(() => {
    if (urlLanguage && urlLanguage !== language && setLanguageDirectly) {
      setLanguageDirectly(urlLanguage);
    }
  }, [urlLanguage, language, setLanguageDirectly]);

  // Invalid language code, redirect to detected language
  if (!isValid) {
    const detectedLang = detectBrowserLanguage();
    const urlLangCode = LANG_TO_URL[detectedLang] || 'zh';
    return <Navigate to={`/${urlLangCode}`} replace />;
  }

  return <Outlet />;
}

export default LanguageLayout;
