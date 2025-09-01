import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts', // Main API server
    // "src/jobs/sync-inventory.ts", // Background job (for future use)
    // "src/worker/queue-listener.ts" // Queue worker (for future use)
  ],
  outDir: 'dist', // Output directory
  format: ['esm'], // Output as ESM
  target: 'es2022', // Modern JavaScript target
  sourcemap: true, // Include source maps for debugging
  clean: true, // Clean the output directory before building
  dts: true, // Generate .d.ts type definitions
  splitting: false, // No code splitting (useful for single app builds)
  minify: false, // Disable minification for easier debugging
  bundle: true, // Bundle all dependencies
  shims: false, // Do not add CJS shims
  skipNodeModulesBundle: true, // Do not bundle node_modules
  tsconfig: 'tsconfig.build.json', // Use a custom tsconfig for build (exclude tests, use production settings)
});
