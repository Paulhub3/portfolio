import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const __dirname = path.resolve();

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['/images/portifiol.PNG'],
    },
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});