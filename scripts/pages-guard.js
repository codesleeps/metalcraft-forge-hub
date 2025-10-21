/*
  GitHub Pages guard for Vite/React apps
  - Ensures Vite base matches repo slug
  - Verifies presence of SPA fallback 404.html
  - Validates built index.html uses correct base-prefixed asset paths
  Usage:
    npm run pages:guard           # pre-build checks
    npm run pages:guard          # post-build checks (will also validate dist)
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function log(kind, msg) {
  const prefix = kind === 'error' ? '[pages-guard][ERROR]' : kind === 'warn' ? '[pages-guard][WARN]' : '[pages-guard]';
  console[kind === 'error' ? 'error' : kind === 'warn' ? 'warn' : 'log'](`${prefix} ${msg}`);
}

function getRepoName() {
  const slug = process.env.GITHUB_REPOSITORY || '';
  if (slug.includes('/')) return slug.split('/')[1];
  // fallback to dirname if not on CI
  return path.basename(process.cwd());
}

function readViteBase() {
  const cfgPath = path.join(process.cwd(), 'vite.config.ts');
  if (!fs.existsSync(cfgPath)) {
    log('warn', 'vite.config.ts not found; skipping base check');
    return null;
  }
  const src = fs.readFileSync(cfgPath, 'utf8');
  const m = src.match(/base:\s*['"]([^'"\n]+)['"]/);
  return m ? m[1] : null;
}

function check404() {
  const p = path.join(process.cwd(), 'public', '404.html');
  if (!fs.existsSync(p)) {
    log('warn', 'public/404.html missing. SPA deep links may 404 on Pages.');
  } else {
    log('log', 'Found public/404.html');
  }
}

function checkBase() {
  const repo = getRepoName();
  const expected = `/${repo}/`;
  const actual = readViteBase();
  if (!actual) {
    log('warn', 'Unable to read Vite base. Ensure base is set for GitHub Pages.');
    return;
  }
  if (actual !== expected) {
    log('error', `Vite base mismatch. Expected "${expected}" but found "${actual}".`);
    log('error', 'Update vite.config.ts: export default defineConfig({ base: "' + expected + '" })');
    process.exitCode = 1;
  } else {
    log('log', `Vite base OK: ${actual}`);
  }
}

function checkDist() {
  const idx = path.join(process.cwd(), 'dist', 'index.html');
  if (!fs.existsSync(idx)) {
    log('log', 'dist/index.html not found yet; skipping post-build validation');
    return;
  }
  const html = fs.readFileSync(idx, 'utf8');
  const repo = getRepoName();
  const base = `/${repo}/`;
  const hasJs = new RegExp(`${base}assets/.*\.js`).test(html);
  const hasCss = new RegExp(`${base}assets/.*\.css`).test(html);
  if (!hasJs || !hasCss) {
    log('error', `Built index.html does not reference assets under ${base}assets/.`);
    process.exitCode = 1;
  } else {
    log('log', 'Built asset paths OK in dist/index.html');
  }
}

function main() {
  checkBase();
  check404();
  checkDist();
}

main();

export { log, getRepoName, readViteBase, check404, checkBase, checkDist, main };