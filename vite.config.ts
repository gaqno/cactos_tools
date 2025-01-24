import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: "@cactos_tools",
      filename: "remoteEntry.js",
      exposes: {
        "./Messages": "./src/constants/Messages",
        "./Theme": "./src/constants/Theme.ts",
        "./Permissions": "./src/constants/Permissions.ts",
        "./AsteraiIAModels": "./src/constants/AsteraiIAModels.ts",
        "./AxiosInstance": "./src/helpers/axiosInstance.ts",
      },
      remotes: {
        "@cactos_host": "http://localhost:5173/remoteEntry.js",
        "@cactos_tools": "http://localhost:5001/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
