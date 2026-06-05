
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function servePublicSiteIndexes() {
  const attachMiddleware = (middlewares: any) => {
    middlewares.use((req: any, res: any, next: any) => {
      if (!req.url) {
        next()
        return
      }

      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
      const match = pathname.match(/^\/sites\/([^/]+)\/?$/)

      if (!match) {
        next()
        return
      }

      const indexPath = path.join(__dirname, 'public', 'sites', match[1], 'index.html')

      if (!fs.existsSync(indexPath)) {
        next()
        return
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(fs.readFileSync(indexPath))
    })
  }

  return {
    name: 'serve-public-site-indexes',
    configureServer(server: any) {
      attachMiddleware(server.middlewares)
    },
    configurePreviewServer(server: any) {
      attachMiddleware(server.middlewares)
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    servePublicSiteIndexes(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
