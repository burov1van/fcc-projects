# Create Currency Converter App

## Overview

This single-page React application lets users convert money between dozens of currencies by hitting the free [ExchangeRate-API](https://www.exchangerate-api.com/). It highlights controlled inputs, derived state, and remote data fetching with Axios inside a Vite project.

## Features

- Fetches the latest rates for the selected base currency and caches them in component state.
- Dropdowns for “From” and “To” codes are populated dynamically from the API response.
- Conversion runs automatically whenever the amount, base, or target currency changes, with a manual **Convert** button for reassurance.
- Responsive layout and dedicated CSS modules (`App.css`, `index.css`) keep the converter centered alongside an illustration panel.

## Tech Stack

- React 18 with Vite
- Axios for HTTP requests
- Modern CSS (flexbox, custom fonts)
- ESLint (default Vite rules)

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`) to use the converter. To create a production build, run `npm run build` and serve the contents of `dist/`.

## API Notes

- Requests hit `https://open.er-api.com/v6/latest/{BASE}` and rely on the free tier (no key required).
- Rates are refreshed whenever the “From” currency changes; handle upstream quotas by avoiding rapid changes in production.

## Purpose

This project was built to practice form state, side effects (`useEffect`), and data transformation in React while delivering a practical tool for comparing currencies.
