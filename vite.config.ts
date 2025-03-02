// vite.config.ts
import { resolve } from 'path'
import Inspect from 'vite-plugin-inspect'


export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        playlist: resolve(__dirname, 'playlist/index.html'),
        subscribe: resolve(__dirname, 'subscribe/index.html')
      }
    }
  }
}