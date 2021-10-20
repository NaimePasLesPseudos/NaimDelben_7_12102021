import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve( __dirname, './src' ),
      '@components': path.resolve( __dirname, './src/components' ),
      '@composable': path.resolve( __dirname, './src/composable' ),
      '@views': path.resolve( __dirname, './src/views')
    },
  },
  plugins: [vue()]
})
