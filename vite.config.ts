import react from "@vitejs/plugin-react-swc";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    copy({
      targets: [
        {
          src: "src/assets/**/*",
          dest: "public/assets",
        },
      ],
    }),
  ],
  preview: {
    port: 8888,
  },
});
