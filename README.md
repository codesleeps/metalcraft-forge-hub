# Metalcraft Forge Hub

A modern Vite + React + TypeScript site generated with Lovable. Showcases Metalcraft Forge products, gallery, contact/quote form and a user dashboard.

## Quick start

Prerequisites:
- Node.js 18+ (recommended)
- npm

Install and run locally:

```sh
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Project structure (important files)

- `index.html` — app entry HTML
- `package.json` — scripts & dependencies
- `vite.config.ts` — Vite config
- `tailwind.config.ts` — Tailwind setup
- `tsconfig.json` — TypeScript config
- `src/main.tsx` — React application bootstrap
- `src/components/` — UI components (e.g. ProductShowcase, Gallery, ContactForm)
- `public/` — static assets
- `.github/workflows/deploy.yml` — GitHub Actions deploy to GitHub Pages

## Technologies

- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn-ui / Radix UI primitives
- GitHub Actions

## Development notes

- Shared UI primitives live in `src/components/ui/`.
- Pages/routes (if present) are under `src/pages/`.
- Static assets are in `src/assets/` and `public/`.
- App is mounted in `src/main.tsx`; HTML shell is `index.html`.

## Deploy

This repository includes a GitHub Actions workflow to publish `dist/` to GitHub Pages.

Manual deploy:
- `npm run build`
- Publish the `dist/` directory to your hosting provider.

## Contributing

- Fork, create a branch, make changes, open a pull request.
- Follow existing Tailwind/shadcn-ui patterns.
- Use `npm run dev` to test locally.

## Troubleshooting

- Check `tsconfig.json` and `vite.config.ts` if imports fail.
- Ensure Tailwind is configured in `tailwind.config.ts` if styles don't update.

## License & Contact

See repository settings for license. Open an issue for feature requests or bugs.