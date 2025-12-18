/**
 * SEO Components - Unified Exports
 */

// Main SEO head component
export { SEOHead, default as SEOHeadDefault } from './SEOHead';

// SEO configuration and utilities
export {
  BASE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  PAGE_SEO,
  URL_LANG_MAP,
  LANG_TO_URL,
  getPageSEO,
  getCanonicalUrl,
  getAlternateUrls,
  getOGLocale,
} from './seoConfig';

// JSON-LD schema generators
export {
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateStyleListSchema,
  generateStyleDetailSchema,
  generateComponentListSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from './schemaGenerators';
