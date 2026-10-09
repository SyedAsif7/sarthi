import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleChatApiRequest } from './chatHandler.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Load .env manually if process.env.GEMINI_API_KEY is not already set
function loadEnvFile() {
  try {
    const envPath = path.join(ROOT_DIR, '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...rest] = trimmed.split('=');
          const val = rest.join('=').trim().replace(/^['"]|['"]$/g, '');
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = val;
          }
        }
      }
    }
  } catch (err) {
    console.warn('Could not load .env file:', err);
  }
}

loadEnvFile();

const PORT = parseInt(process.env.PORT || '5173', 10);

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const server = http.createServer(async (req, res) => {
  const urlPath = req.url?.split('?')[0] || '/';

  // API Route: POST /api/chat
  if (urlPath === '/api/chat') {
    return handleChatApiRequest(req, res);
  }

  // Health check
  if (urlPath === '/api/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok', service: 'SARTHI AI Assistant API' }));
    return;
  }

  // Serve static files from dist/ if built
  if (fs.existsSync(DIST_DIR)) {
    let filePath = path.join(DIST_DIR, urlPath === '/' ? 'index.html' : urlPath);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, 'index.html'); // SPA fallback
    }

    try {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      const fileData = fs.readFileSync(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(fileData);
      return;
    } catch {
      // fallback below
    }
  }

  res.statusCode = 404;
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`[SARTHI Server] Running on http://localhost:${PORT}`);
  console.log(`[SARTHI Server] Gemini Model configured: ${process.env.GEMINI_MODEL || 'gemini-flash-latest'}`);
  console.log(`[SARTHI Server] Gemini API Key present: ${Boolean(process.env.GEMINI_API_KEY)}`);
});
