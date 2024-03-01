import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      external: ['web-vitals']
    }
  },
  resolve: {
    alias: {
      '@': '/Users/mangeshyadav/my-app/src' // Adjust the path as per your project structure
    }
  }
});
