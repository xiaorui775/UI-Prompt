# Custom Hooks

This directory contains custom React hooks used throughout the UI Style Prompt application.

## Available Hooks

### Core Hooks

#### `useLanguage`
Provides internationalization (i18n) context for the application.

**File:** `useLanguage.jsx`

```javascript
import { useLanguage } from '../hooks/useLanguage';

function MyComponent() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <p>{t('common.welcome')}</p>
      <button onClick={() => setLanguage('en-US')}>English</button>
      <button onClick={() => setLanguage('zh-CN')}>中文</button>
    </div>
  );
}
```

**Returns:**
- `language` - Current language code (`'zh-CN'` | `'en-US'`)
- `setLanguage(code)` - Function to change language
- `t(key, params?)` - Translation function

---

#### `useDarkMode`
Manages dark mode state with system preference detection and persistence.

**File:** `useDarkMode.jsx`

```javascript
import { useDarkMode } from '../hooks/useDarkMode';

function ThemeToggle() {
  const { isDark, toggle, setDarkMode } = useDarkMode();

  return (
    <button onClick={toggle}>
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
```

**Returns:**
- `isDark` - Boolean indicating dark mode status
- `toggle()` - Toggle between light/dark
- `setDarkMode(value)` - Set specific mode

---

#### `useToast`
Toast notification system hook.

**File:** `useToast.jsx`

```javascript
import { useToast } from '../hooks/useToast';

function MyComponent() {
  const { showToast, ToastContainer } = useToast();

  const handleClick = () => {
    showToast('Operation successful!', 'success');
  };

  return (
    <>
      <button onClick={handleClick}>Show Toast</button>
      <ToastContainer />
    </>
  );
}
```

**Returns:**
- `showToast(message, type?)` - Show a toast notification
- `ToastContainer` - Component to render toasts

---

### Data Hooks

#### `useDetailPageState`
Manages complex state for style/component detail pages.

**File:** `useDetailPageState.js`

```javascript
import { useDetailPageState } from '../hooks/useDetailPageState';

function StyleDetailPage({ styleId }) {
  const {
    styleData,
    isLoading,
    error,
    activePreview,
    setActivePreview
  } = useDetailPageState(styleId);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;

  return <StylePreview data={styleData} />;
}
```

---

#### `useUnifiedPreviewPageState`
Unified state management for preview pages with caching.

**File:** `useUnifiedPreviewPageState.js`

```javascript
import { useUnifiedPreviewPageState } from '../hooks/useUnifiedPreviewPageState';

function PreviewPage({ styleId }) {
  const {
    previewData,
    isLoading,
    selectedIndex,
    setSelectedIndex
  } = useUnifiedPreviewPageState(styleId);

  return (
    <PreviewSelector
      previews={previewData.previews}
      selected={selectedIndex}
      onSelect={setSelectedIndex}
    />
  );
}
```

---

#### `useRemoteCategories`
Fetches and caches category data from the API.

**File:** `useRemoteCategories.js`

```javascript
import { useRemoteCategories } from '../hooks/useRemoteCategories';

function CategoryFilter() {
  const { categories, isLoading, error } = useRemoteCategories();

  return (
    <select>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </select>
  );
}
```

---

#### `usePromptContent`
Loads prompt content for a specific style.

**File:** `usePromptContent.js`

```javascript
import { usePromptContent } from '../hooks/usePromptContent';

function PromptDisplay({ styleId }) {
  const { prompt, isLoading } = usePromptContent(styleId);

  return <pre>{prompt}</pre>;
}
```

---

#### `useLazyDemoContent`
Lazy loads demo HTML/CSS content with intersection observer.

**File:** `useLazyDemoContent.js`

```javascript
import { useLazyDemoContent } from '../hooks/useLazyDemoContent';

function DemoCard({ styleId }) {
  const { ref, content, isLoaded } = useLazyDemoContent(styleId);

  return (
    <div ref={ref}>
      {isLoaded ? <Preview html={content} /> : <Skeleton />}
    </div>
  );
}
```

---

### Utility Hooks

#### `useDebounce`
Debounces a value with configurable delay.

**File:** `useDebounce.js`

```javascript
import { useDebounce } from '../hooks/useDebounce';

function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      performSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

**Parameters:**
- `value` - Value to debounce
- `delay` - Debounce delay in milliseconds (default: 300)

---

#### `useSharedIntersectionObserver`
Shared IntersectionObserver for performance optimization.

**File:** `useSharedIntersectionObserver.js`

```javascript
import { useSharedIntersectionObserver } from '../hooks/useSharedIntersectionObserver';

function LazyComponent() {
  const { ref, isIntersecting } = useSharedIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <div ref={ref}>
      {isIntersecting && <ExpensiveContent />}
    </div>
  );
}
```

---

#### `usePerformanceMonitor`
Monitors component performance metrics.

**File:** `usePerformanceMonitor.js`

```javascript
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

function HeavyComponent() {
  usePerformanceMonitor('HeavyComponent');

  return <ComplexUI />;
}
```

---

#### `useCollisionAnimation`
Animation hook for collision effects.

**File:** `useCollisionAnimation.jsx`

```javascript
import { useCollisionAnimation } from '../hooks/useCollisionAnimation';

function AnimatedElement() {
  const { ref, style } = useCollisionAnimation({
    duration: 500,
    easing: 'ease-out'
  });

  return <div ref={ref} style={style}>Animated!</div>;
}
```

---

## Hook Patterns

### Data Fetching Pattern
```javascript
function useData(id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await loadData(id);
        if (!cancelled) {
          setData(result);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e.message);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => { cancelled = true; };
  }, [id]);

  return { data, isLoading, error };
}
```

### Cleanup Pattern
All hooks that use subscriptions or timers properly clean up:

```javascript
useEffect(() => {
  const subscription = subscribe(callback);

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

## Related Documentation

- `src/utils/README.md` - Utility functions
- `src/stores/canvas/actions/README.md` - State management
- `src/data/loaders/README.md` - Data loading system
