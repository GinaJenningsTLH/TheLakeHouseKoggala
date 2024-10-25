import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Include all relevant extensions
  },
  build: {
    outDir: 'dist', // Output directory for the built files
    assetsDir: 'assets', // Directory to store assets like images
  },
  server: {
    open: true, // Automatically open the browser when the dev server starts
    port: 5173, // Specify the port if needed, adjust as per your preference
  },
});
