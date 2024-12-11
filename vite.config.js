import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    include: ['flowbite'], // Ensures flowbite is bundled
  },
  build: {
    rollupOptions: {
      input: './index.html', // Ensure correct input file
    },
  },
});
