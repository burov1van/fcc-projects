# Cat Facts & Excuse Generator

## Overview

This Vite project bundles two small API-driven widgets:

- **CatFacts** fetches a random cat fact plus a fresh cat photo each time you click the button.
- **ExcuseApp** fetches themed excuses by category (family, office, gaming, etc.) for fun copywriting practice.

Both components showcase `useState`, `useEffect`, and `useCallback` patterns for working with remote data in React.

## Features

- Debounced “Give me a new fact!” button that pulls text from `catfact.ninja` and imagery from `thecatapi.com`.
- Axios-powered excuse generator hitting `excuser-three.vercel.app` with selectable categories.
- Shared styling via `App.css`/`index.css` plus component-specific classes.
- Error-free render guards (empty states while data is loading).

## Tech Stack

- React 18 + Vite
- Axios for HTTP requests
- Modern CSS with flexbox layout helpers
- ESLint (Vite defaults)

## Getting Started

```bash
npm install
npm run dev
```

Open the dev server URL to test both widgets. Use `npm run build` for a production bundle inside `dist/`.

## API References

- Facts: `https://catfact.ninja/fact`
- Photos: `https://api.thecatapi.com/v1/images/search`
- Excuses: `https://excuser-three.vercel.app/v1/excuse/{category}/`

> Tip: Add your own API keys or rate-limiting as needed; the current endpoints are free and public.

## Purpose

The app serves as a playground for practicing asynchronous data fetching, custom hooks logic, and UI microinteractions before incorporating similar widgets into larger dashboards.
