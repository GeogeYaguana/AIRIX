import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    // Prevent Vite from inlining or hashing assets in public/ (videos are served directly)
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Keep video/audio files out of the JS bundle
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop() ?? ''
          if (['mp4', 'webm', 'ogg', 'mov'].includes(ext)) {
            return 'videos/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
