import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react",
    plugins: [
      ["@swc/plugin-emotion", {}]
    ],
  })],
  build: {},
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "~": '/src'
    }
  }
})
