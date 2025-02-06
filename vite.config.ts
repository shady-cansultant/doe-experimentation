import { defineConfig } from 'vite';
import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production';

// @ts-ignore:next line
export default defineConfig(() => ({
  base: './',
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      Blocks: resolve(__dirname, 'src/blocks'),
    },
  },
  build: {
    sourcemap: true,
    minify: true,
    cssMinify: true,
    commonjsOptions: {
      include: ['node_modules/**'],
    },
    emptyOutDir: true,
    rollupOptions: {
      cache: false,
      preserveEntrySignatures: 'strict',
      input: {
        main: './src/main.js',
      },
      output: {
        dir: 'dist',
        assetFileNames: () => '[name]/[name][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]/[name].js',
      },
      plugins: [isProd],
    },
  },
}));
