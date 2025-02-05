import { defineConfig } from 'vite';

const isProd = process.env.NODE_ENV === 'production';

// @ts-ignore:next line
export default defineConfig(() => {
  return {
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
          chunkFileNames: '__chunks__/[name].[hash].js',
          entryFileNames: '[name]/[name].js',
        },
        plugins: [isProd],
      },
    },
  };
});
