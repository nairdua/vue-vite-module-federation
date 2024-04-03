import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        root: "http://localhost:5000/assets/remoteEntry.js",
      },
      exposes: {
        "./Counter": "./src/components/RemoteCounter.vue",
      },
      shared: ["vue", "pinia"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
