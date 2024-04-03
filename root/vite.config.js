import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "root",
      filename: "remoteEntry.js",
      remotes: {
        remote: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
        "./counter-store": "./src/stores/counter.js",
      },
      shared: ["vue", "pinia"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
