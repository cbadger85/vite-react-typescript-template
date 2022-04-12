/// <reference types="vitest" />

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const ENV_PREFIX = ['REACT_APP_', 'SERVER'];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', ENV_PREFIX);

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      mode !== 'test' &&
        checker({
          overlay: false,
          typescript: true,
          eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
        }),
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: Number(env.SERVER_PORT),
      open: env.SERVER_OPEN_BROWSER === 'true',
    },
    build: {
      outDir: 'build',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      reporters: 'verbose',
      setupFiles: ['./setupTests.ts'],
    },
  };
});
