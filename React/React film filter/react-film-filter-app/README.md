# React Film Filter App

## Overview

This application lets you explore movies from [TMDB](https://www.themoviedb.org/) and surface related entertainment news headlines. It demonstrates client-side routing, async data fetching, and reusable card components inside a Vite + React stack.

## Features

- **Discover & Search** – Landing page pulls the current “Popular” feed from TMDB and lets you search by title with on-submit requests.
- **Movie Details** – Each card links to `/movie/:id`, loading a full detail view on demand.
- **Favorites Placeholder** – `/favorite` page shows the empty state you'd surface before wiring persistence.
- **Entertainment News** – Fetches stories from TheNewsAPI and displays them in a secondary grid.
- Loading/error handling keeps the UI responsive and communicates network issues.

## Tech Stack

- React 18 with Vite
- React Router DOM for SPA navigation
- Fetch API for TMDB and TheNewsAPI calls
- Custom CSS modules located in `src/css`

## Getting Started

```bash
npm install
npm run dev
```

Open the dev server URL (default `http://localhost:5173`) to browse movies. Build for production with `npm run build`.

## Configuration

API keys are hard-coded in `src/services/api.js` (TMDB) and `src/services/thenewsapi.js` (TheNewsAPI). For real deployments, move them to environment variables:

```bash
# .env
VITE_TMDB_KEY=xxxxxxxx
VITE_NEWS_KEY=xxxxxxxx
```

Then reference them via `import.meta.env.VITE_TMDB_KEY`, etc.

## Purpose

The project was assembled to practice routing, multi-endpoint data flows, and responsive card layouts—skills that translate directly to streaming dashboards or media catalogs.
