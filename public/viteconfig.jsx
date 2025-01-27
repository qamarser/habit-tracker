import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically opens the browser
  },
  build: {
    outDir: 'dist', // Output directory
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/habit-tracker/', // Replace <repository-name> with the name of your GitHub repository
});
