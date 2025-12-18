# Utilities

This directory contains utility functions and modules used throughout the UI Style Prompt application.

## Directory Structure

```
utils/
├── error/              # Error handling (planned)
├── jsx/                # JSX compilation (planned)
├── preview/            # Preview rendering (planned)
├── data/               # Data helpers (planned)
├── i18n/               # Internationalization
├── storage/            # Browser storage helpers
├── prompt/             # Prompt generation
├── editor/             # Code editor utilities
└── [root files]        # Core utilities
```

## Core Modules

### Error Handling

#### `errorHandler.js`
Centralized error handling with environment-aware logging.

```javascript
import { asyncTryCatch, tryCatch, withRetry } from './errorHandler';

// Sync operation with fallback
const result = tryCatch(() => riskyOperation(), defaultValue);

// Async operation with fallback
const data = await asyncTryCatch(
  () => fetchData(),
  fallbackData,
  { context: 'MyComponent.load' }
);

// Retry with exponential backoff
const response = await withRetry(
  () => unreliableAPI(),
  { maxAttempts: 3, delay: 1000 }
);
```

#### `logger.js`
Environment-aware logging utility.

```javascript
import logger from './logger';

logger.info('Operation completed');
logger.warn('Potential issue detected');
logger.error('Operation failed', error);
logger.debug('Debug info'); // Only in development
```

### JSX Compilation

#### `jsxCompiler.js`
Compiles JSX code for live preview using Sucrase.

```javascript
import { compileJSX, createPreviewHTML } from './jsxCompiler';

const { code, error } = await compileJSX(jsxSource);
```

#### `jsxPreprocessor.js`
Preprocesses JSX before compilation (imports, exports handling).

#### `reactRuntime.js` / `preactRuntime.js`
Runtime environments for executing compiled JSX in iframes.

### Preview System

#### `previewLoader.js`
Loads and prepares preview content (HTML/CSS).

```javascript
import { loadPreview, buildPreviewHTML } from './previewLoader';

const previewData = await loadPreview(styleId, { language: 'zh-CN' });
```

#### `previewCss.js`
CSS processing utilities for previews.

#### `previewsHelper.js`
Helper functions for preview selection and management.

#### `emptyStateTemplate.js`
Generates empty state HTML when no preview is available.

### Data Helpers

#### `styleHelper.js`
Style-related utilities.

```javascript
import { getStylePreviewUrl, formatStyleName } from './styleHelper';

const url = getStylePreviewUrl('glassmorphism-landing');
```

#### `categoryHelper.js`
Category filtering and organization.

```javascript
import { getCategoryStyles, filterByTags } from './categoryHelper';

const visualStyles = getCategoryStyles('visual');
```

#### `componentHelper.js`
Component data utilities.

### Internationalization (`i18n/`)

#### `translations.js`
Translation strings for supported locales.

#### `resolveI18nValue.js`
Resolves i18n values from objects.

```javascript
import { resolveI18nValue } from './i18n/resolveI18nValue';

// { "zh-CN": "Hello", "en-US": "Hello" }
const greeting = resolveI18nValue(i18nObject, 'zh-CN');
```

### Storage (`storage/`)

#### `localStorageHelper.js`
Safe localStorage access with validation.

```javascript
import { getItem, setItem } from './storage/localStorageHelper';

setItem('theme', 'dark');
const theme = getItem('theme', 'light'); // with default
```

### Prompt Generation (`prompt/`)

#### `promptGenerator.js`
Generates AI prompts from style templates.

```javascript
import { generatePrompt } from './prompt/promptGenerator';

const prompt = generatePrompt(styleData, { language: 'en-US' });
```

### Other Utilities

#### `animations.js`
Reusable animation definitions and helpers.

#### `constants.js`
Application-wide constants.

#### `routeLoaders.js`
React Router loader functions.

#### `preloadHelpers.js`
Resource preloading utilities.

#### `indexedDBCache.js`
IndexedDB caching layer with TTL support.

```javascript
import { getCached, setCached, clearCache } from './indexedDBCache';

await setCached('key', data, { ttl: 86400000 });
const cached = await getCached('key');
```

#### `sanitizeCache.js`
DOMPurify wrapper with LRU caching.

```javascript
import { sanitizeHTML, sanitizeCSS } from './sanitizeCache';

const safeHTML = sanitizeHTML(untrustedHTML);
```

## Planned Reorganization

The following files should be moved to subdirectories for better organization:

### `error/`
- `errorHandler.js`
- `logger.js`

### `jsx/`
- `jsxCompiler.js`
- `jsxPreprocessor.js`
- `reactRuntime.js`
- `preactRuntime.js`

### `preview/`
- `previewLoader.js`
- `previewCss.js`
- `previewsHelper.js`
- `emptyStateTemplate.js`

### `data/`
- `styleHelper.js`
- `categoryHelper.js`
- `componentHelper.js`

## Best Practices

### Error Handling
Always use `asyncTryCatch` or `tryCatch` for operations that may fail:

```javascript
// Good
const data = await asyncTryCatch(() => loadData(), defaultData);

// Avoid
try {
  const data = await loadData();
} catch (e) {
  console.error(e);
}
```

### Logging
Use `logger` instead of `console`:

```javascript
// Good
logger.info('Data loaded successfully');

// Avoid (in production code)
console.log('Data loaded successfully');
```

### Caching
Use appropriate caching for expensive operations:

```javascript
// For frequently accessed data
import { getCached, setCached } from './indexedDBCache';

// For one-off operations
import { memoize } from './cacheUtils';
```

## Related Documentation

- `src/data/loaders/README.md` - Data loading system
- `src/hooks/README.md` - Custom React hooks
- `src/stores/canvas/actions/README.md` - State management
