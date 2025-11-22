# Bundle Size Report

All sizes are minified and compressed with Brotli compression.

## Overview

| Import | Size (Brotli) | Description |
|--------|---------------|-------------|
| **Entire Library** | **3.92 KB** | All functions imported |
| Validation (all) | 574 B | All validation functions |
| Time utilities (all) | 748 B | All time/date functions |
| Calculations (all) | 681 B | All math/calculation functions |
| String utilities (all) | 1.54 KB | All string manipulation functions |

## Individual Function Examples

| Import | Size (Brotli) | Use Case |
|--------|---------------|----------|
| Vietnamese sorting only | 1.75 KB | `compareVietnamese`, `sortVietnamese`, `sortVietnameseBy` |
| Email validation only | 764 B | `isValidEmail` |
| Time formatting only | 939 B | `formatDate`, `formatTime` |

## Tree-Shaking Support

This library is built with CommonJS modules. When using modern bundlers (webpack, Rollup, Vite), they can perform tree-shaking to include only the functions you import.

### Example: Small Bundle

If you only import:
```typescript
import { isValidEmail, formatDate } from 'ts-utils';
```

Your bundle will only include these specific functions, not the entire library.

### Example: Vietnamese Sorting

Vietnamese sorting functions include the character mapping table:
```typescript
import { sortVietnamese } from 'ts-utils';
```
Size: ~1.75 KB (includes the Vietnamese character ordering map)

## Checking Sizes

You can check bundle sizes anytime by running:

```bash
npm run size
```

For detailed analysis of what's included:
```bash
npm run size:why
```

## How to Minimize Bundle Size

1. **Import only what you need:**
   ```typescript
   // ✅ Good - only imports specific functions
   import { isValidEmail, sortVietnamese } from 'ts-utils';

   // ❌ Avoid - imports everything
   import * as utils from 'ts-utils';
   ```

2. **Use modern bundlers** with tree-shaking support:
   - Webpack 5+
   - Rollup
   - Vite
   - esbuild

3. **Check your bundle** using tools like:
   - [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
   - [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)
   - [Bundlephobia](https://bundlephobia.com/)

## Online Analysis

You can also analyze this package online at:
- [Bundlephobia](https://bundlephobia.com/package/ts-utils)
- Just paste the GitHub URL when installing: `khoinguyenvk9/ts-utils`

## Size Limits

We enforce size limits in CI to prevent the library from growing too large:

- Entire library: < 20 KB
- Individual modules: < 10 KB
- Most common imports: < 3 KB

---

*Last updated: Run `npm run size` to see current sizes*
