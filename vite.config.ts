import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: ["X-Requested-With", "content-type", "Authorization"],
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: '@cactos_tools',
      filename: 'remoteEntry.js',
      exposes: {
        './noise.webp': './src/assets/noise.webp',
        "./MfeErrorLoading": "./src/components/MfeErrorLoading",
      },
      remotes: {
        '@cactos_host': 'http://localhost:5173/remoteEntry.js',
        '@cactos_tools': 'http://localhost:5000/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    })
  ],
})
