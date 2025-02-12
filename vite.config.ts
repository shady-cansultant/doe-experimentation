import { defineConfig } from 'vite';
import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production';

// @ts-ignore:next line
export default defineConfig(() => ({
  base: './',
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import 'nsw-design-system/src/global/scss/settings/settings';
@import 'nsw-design-system/src/global/scss/base/all';
@import 'nsw-design-system/src/global/scss/helpers/all';
@import 'nsw-design-system/src/global/scss/settings/palette';
@import 'nsw-design-system/src/global/scss/settings/theme';
@import 'nsw-design-system/src/core/all';
        `,
        api: 'modern',
      },
    },
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
        ue: './src/scripts/editor-support.js',
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
