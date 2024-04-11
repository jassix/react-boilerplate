import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [
        ["@swc/plugin-emotion", {}],
        ["effector-swc-plugin", {}]
      ],
    }),
    
    sentryVitePlugin({
      org: "boxlife-hq",
      project: "javascript-react"
    })
  ],
  build: {
    sourcemap: true
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "~": '/src'
    }
  }
})