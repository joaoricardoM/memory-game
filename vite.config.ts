import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `margin: 0;  padding: 0; box-sizing: border-box;  text-decoration: none;`,
      },
    },
  },
});
