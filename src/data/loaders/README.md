# Data Loaders

This directory contains the data loading layer for the UI Style Prompt application. It implements a modular, cacheable system for fetching and managing style/component data.

## Architecture Overview

```
loaders/
├── BaseLoader.js          # Abstract base class with caching and error handling
├── FamilyLoader.js        # Loads style families with progressive loading
├── ContentLoader.js       # Loads demo HTML/CSS content
├── PromptLoader.js        # Loads prompt templates (i18n-aware)
├── IContentLoader.js      # Interface for content loading operations
├── ManifestLoader.js      # Loads manifest.json files
├── StyleIdParser.js       # Parses and validates style IDs
├── jsonComponentLoader.js # Component-specific loader
├── index.js              # Public exports
└── config/               # Loader configurations
```

## Core Classes

### BaseLoader

Abstract base class providing:
- **Memory caching** with configurable TTL
- **Race condition protection** via pending request tracking
- **Retry logic** with exponential backoff
- **Error handling** with graceful fallbacks

```javascript
import { BaseLoader } from './BaseLoader';

class CustomLoader extends BaseLoader {
  constructor() {
    super({ cacheTTL: 60000, maxRetries: 3 });
  }

  async load(id) {
    return this.withCache(id, () => this.fetchData(id));
  }
}
```

### FamilyLoader

Loads style family data with support for:
- Progressive loading from sharded JSON files
- Category-based filtering
- Fallback to full index on shard failure

```javascript
import { loadStyleFamily, loadAllFamilies } from './FamilyLoader';

// Load single family
const family = await loadStyleFamily('visual/glassmorphism');

// Load all families with optional filter
const families = await loadAllFamilies({ category: 'visual' });
```

### ContentLoader

Fetches demo HTML/CSS content with:
- SPA fallback detection (Vite dev server handling)
- Content type validation
- Automatic retry on failure

```javascript
import { loadDemoContent, loadFullpageContent } from './ContentLoader';

const demo = await loadDemoContent('visual', 'glassmorphism', 'landing');
```

### PromptLoader

Loads prompt templates with i18n support:

```javascript
import { loadPrompt } from './PromptLoader';

const prompt = await loadPrompt('visual/glassmorphism/landing', 'zh-CN');
```

### StyleIdParser

Parses style IDs in various formats:

```javascript
import { parseStyleId, validateStyleId } from './StyleIdParser';

// Supports formats:
// - 'glassmorphism-landing'
// - 'visual/glassmorphism/landing'
// - 'visual-glassmorphism-landing'

const { category, family, templateId } = parseStyleId('glassmorphism-landing');
```

## Data Flow

```
                    ┌─────────────────┐
                    │   Route Loader  │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  FamilyLoader   │ ← Memory Cache
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼───────┐   ┌───────▼───────┐   ┌───────▼───────┐
│ ContentLoader │   │ PromptLoader  │   │ManifestLoader │
└───────┬───────┘   └───────┬───────┘   └───────┬───────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                    ┌────────▼────────┐
                    │   Static JSON   │
                    │  /public/data/  │
                    └─────────────────┘
```

## Caching Strategy

1. **Build-time**: `npm run build:styles-index` generates `/public/data/styles-index.json`
2. **Runtime Memory Cache**: In-memory LRU cache with TTL
3. **IndexedDB Cache**: Persistent cache for expensive operations (see `utils/indexedDBCache.js`)

## Error Handling

All loaders use the centralized error handling from `utils/errorHandler.js`:

```javascript
import { asyncTryCatch, withRetry } from '../../utils/errorHandler';

const result = await asyncTryCatch(
  () => fetchData(url),
  fallbackValue,
  { context: 'FamilyLoader.load' }
);
```

## Configuration

Loader behavior can be configured in `config/`:

```javascript
// config/loaderConfig.js
export const LOADER_CONFIG = {
  cacheTTL: 24 * 60 * 60 * 1000,  // 24 hours
  maxRetries: 3,
  retryDelay: 1000,
  enableProgressiveLoading: true
};
```

## Usage in Routes

Loaders are integrated with React Router for pre-fetching:

```javascript
// src/routes/index.jsx
import { stylePreviewLoader } from '../utils/routeLoaders';

{
  path: '/styles/:styleId',
  element: <StylePreviewPage />,
  loader: stylePreviewLoader
}
```

## Performance Considerations

- **Shard Loading**: Category-specific JSON files reduce initial payload
- **Parallel Fetching**: `Promise.all()` for independent resources
- **Race Condition Prevention**: Pending request deduplication
- **Lazy Content**: Demo HTML/CSS loaded on demand

## Related Files

- `src/utils/routeLoaders.js` - React Router loader integrations
- `src/utils/preloadHelpers.js` - Preloading utilities
- `src/utils/indexedDBCache.js` - Persistent cache layer
