import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { handleChatApiRequest } from './server/chatHandler.mjs'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    plugins: [
      react(),
      {
        name: 'sarthi-api-dev-server',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url?.split('?')[0]
            if (url === '/api/chat') {
              return handleChatApiRequest(req, res, env)
            }
            if (url === '/api/health') {
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ status: 'ok', service: 'SARTHI AI Assistant Dev Server' }))
              return
            }
            next()
          })
        }
      }
    ],
    server: {
      port: 5173,
      host: true,
    },
  }
})
