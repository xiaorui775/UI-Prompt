/**
 * Hook for extracting and validating language from URL
 * Syncs URL language parameter with the language context
 */

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import {
  LANGUAGES,
  DEFAULT_LANGUAGE,
} from '../utils/i18n/languageConstants';
import { URL_LANG_MAP, LANG_TO_URL } from '../components/seo/seoConfig';

/**
 * Valid URL language codes
 */
export const VALID_URL_LANGS = ['zh', 'en'];

/**
 * Convert URL language code to internal language code
 * @param {string} urlLang - URL language code (zh or en)
 * @returns {string} Internal language code (zh-CN or en-US)
 */
export function urlLangToInternal(urlLang) {
  return URL_LANG_MAP[urlLang] || DEFAULT_LANGUAGE;
}

/**
 * Convert internal language code to URL language code
 * @param {string} internalLang - Internal language code (zh-CN or en-US)
 * @returns {string} URL language code (zh or en)
 */
export function internalToUrlLang(internalLang) {
  return LANG_TO_URL[internalLang] || 'zh';
}

/**
 * Check if URL language code is valid
 * @param {string} lang - URL language code
 * @returns {boolean}
 */
export function isValidUrlLang(lang) {
  return VALID_URL_LANGS.includes(lang);
}

/**
 * Hook to get language from URL and provide navigation utilities
 * @returns {Object} { urlLang, language, navigateWithLang, switchUrlLanguage }
 */
export function useLanguageFromUrl() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Validate and normalize URL language
  const urlLang = isValidUrlLang(lang) ? lang : null;
  const language = urlLang ? urlLangToInternal(urlLang) : DEFAULT_LANGUAGE;

  /**
   * Navigate to a path while preserving the current language
   * @param {string} path - Path without language prefix
   * @param {Object} options - Navigation options
   */
  const navigateWithLang = useCallback(
    (path, options = {}) => {
      const currentUrlLang = urlLang || internalToUrlLang(DEFAULT_LANGUAGE);
      const cleanPath = path.startsWith('/') ? path : `/${path}`;
      navigate(`/${currentUrlLang}${cleanPath}`, options);
    },
    [urlLang, navigate]
  );

  /**
   * Switch to a different language while staying on the same page
   */
  const switchUrlLanguage = useCallback(() => {
    const newLang = language === LANGUAGES.ZH_CN ? 'en' : 'zh';
    // Extract path without language prefix
    const pathMatch = location.pathname.match(/^\/(zh|en)(\/.*)?$/);
    const pathWithoutLang = pathMatch ? pathMatch[2] || '' : location.pathname;
    navigate(`/${newLang}${pathWithoutLang}${location.search}`, {
      replace: true,
    });
  }, [language, location, navigate]);

  return {
    urlLang,
    language,
    navigateWithLang,
    switchUrlLanguage,
    isValidLang: !!urlLang,
  };
}

/**
 * Get the current path without language prefix
 * @param {string} pathname - Full pathname
 * @returns {string} Path without language prefix
 */
export function getPathWithoutLang(pathname) {
  const match = pathname.match(/^\/(zh|en)(\/.*)?$/);
  return match ? match[2] || '/' : pathname;
}

/**
 * Add language prefix to a path
 * @param {string} path - Path without language prefix
 * @param {string} language - Internal language code
 * @returns {string} Path with language prefix
 */
export function addLangToPath(path, language) {
  const urlLang = internalToUrlLang(language);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${urlLang}${cleanPath === '/' ? '' : cleanPath}`;
}

export default useLanguageFromUrl;
