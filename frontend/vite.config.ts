import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // Adjust if deploying to a subdirectory
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: true,
    cssMinify: 'esbuild',
  },
  server: {
    open: true, // Automatically open the browser when the dev server starts
    port: 5173, // Specify the port if needed, adjust as per your preference
  },
});
