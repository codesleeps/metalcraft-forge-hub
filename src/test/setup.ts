import '@testing-library/jest-dom/vitest'
import { JSDOM } from 'jsdom'

// Ensure JSDOM globals exist even if the environment isn’t set correctly
if (typeof globalThis.document === 'undefined' || typeof globalThis.window === 'undefined') {
  const dom = new JSDOM('<!doctype html><html><body></body></html>')
  // Assign minimal globals without TypeScript suppression
  Object.assign(globalThis, {
    window: dom.window,
    document: dom.window.document,
    navigator: { userAgent: 'vitest' },
  })
}