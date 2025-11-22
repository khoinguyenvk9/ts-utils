# How to Check Import Sizes in Your Project

## Method 1: Using Bundlephobia (Online)

Visit [Bundlephobia](https://bundlephobia.com/) and search for:
- `khoinguyenvk9/ts-utils` (if installing from GitHub)
- `ts-utils` (if published to npm)

This will show you the size impact of the entire package.

## Method 2: Using Webpack Bundle Analyzer

If you're using webpack in your project:

1. Install the analyzer:
```bash
npm install --save-dev webpack-bundle-analyzer
```

2. Add to your webpack config:
```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
```

3. Build your project and it will open a visualization showing exactly what's included from `ts-utils`.

## Method 3: Check in Your Build Output

Most bundlers show size in their output:

### Vite
```bash
npm run build
# Output will show chunk sizes
```

### Next.js
```bash
npm run build
# Shows "First Load JS" sizes per page
```

### Create React App
```bash
npm run build
# Shows file sizes after gzip
```

## Method 4: Manual Size Check

Create a test file to check specific imports:

```javascript
// test-import.js
import { sortVietnamese, isValidEmail } from 'ts-utils';

console.log(sortVietnamese(['a', 'b']));
console.log(isValidEmail('test@example.com'));
```

Then bundle it:

```bash
# Using esbuild
npx esbuild test-import.js --bundle --minify | wc -c
```

## Understanding the Numbers

When you see size reports, here's what they mean:

- **Raw size**: Original file size (largest)
- **Minified**: After removing whitespace and shortening names (smaller)
- **Gzipped**: After compression with gzip (even smaller)
- **Brotli**: After compression with Brotli (smallest - modern standard)

Our library reports Brotli sizes because that's what most modern servers use.

## Tree-Shaking Verification

To verify tree-shaking is working:

### Example that tree-shakes well:
```typescript
// ✅ Only imports specific functions - bundler can remove unused code
import { isValidEmail, sortVietnamese } from 'ts-utils';
```

### Example that might include more:
```typescript
// ⚠️ Imports everything - may include unused code depending on bundler
import * as utils from 'ts-utils';
const email = utils.isValidEmail('test@example.com');
```

## Recommended Tools

1. **[Bundlephobia](https://bundlephobia.com/)** - Quick online analysis
2. **[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)** - Detailed webpack analysis
3. **[source-map-explorer](https://github.com/danvk/source-map-explorer)** - Works with any bundler
4. **[rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)** - For Rollup/Vite projects

## Library Size Guarantee

We maintain size limits in our CI/CD:
- Entire library: < 20 KB (currently ~3.92 KB)
- Individual modules: < 10 KB
- Common imports: < 3 KB

You can see our size tests in `.size-limit.js` and run them with `npm run size`.
