// vite.config.ts
import { resolve } from 'path'
import Inspect from 'vite-plugin-inspect'


export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        playlist: resolve(__dirname, 'login/index.html')
      }
    }
  }
}