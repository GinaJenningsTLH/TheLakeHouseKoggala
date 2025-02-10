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
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@contexts': resolve(__dirname, 'src/contexts'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@types': resolve(__dirname, 'src/types'),
      '@styles': resolve(__dirname, 'src/styles'),
      
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks: {
          'critical': ['./src/styles/critical.css'],
          'vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'slider': ['react-awesome-slider'],
          'icons': ['@fortawesome/fontawesome-svg-core'],
        },
      },
    },
    cssMinify: true,
  },
  server: {
    open: true, // Automatically open the browser when the dev server starts
    port: 5173, // Specify the port if needed, adjust as per your preference
    proxy: {
      '/api': 'https://www.thelakehousekoggala.com'
    }
  },
  publicDir: 'public'
});
