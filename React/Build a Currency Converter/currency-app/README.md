# Currency Converter (freeCodeCamp)

Single-page React app that fulfills the freeCodeCamp "Build a Currency Converter" user stories. The UI lets you enter an amount, pick a source and target currency, and instantly see the converted total with memoized calculations for snappy updates.

## Features

- Numeric amount input with validation-friendly handling for empty/invalid values
- Two currency selectors covering USD, EUR, GBP, and JPY (extendable to more)
- Exchange-rate table with non-1:1 mappings (e.g., USD 1, EUR 0.92, GBP 0.78, JPY 156.7)
- Memoized base-to-all conversions so changing only the "to" currency does not recompute rates
- Result displayed as `XX.XX CCC` and rounded to two decimals
- Minimal, responsive layout with accessible labels and focus states

## Tech Stack

- React + Vite
- CSS Modules-style scoping via `App.css`
- ESLint (Vite React defaults)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed localhost URL. Hot Module Replacement is enabled.

### Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – production build
- `npm run lint` – lint with ESLint

## How It Works

- `src/App.jsx` hosts the `CurrencyConverter` logic: amount state, `from`/`to` currency selectors, and the displayed result.
- Exchange rates live in a `rates` map keyed by currency code. USD is the base for clarity.
- The conversion pipeline uses `useMemo` to cache the computed amounts for the selected **from** currency; switching the **to** currency simply looks up the cached map and formats the chosen value.
- Formatting uses `toFixed(2)` to satisfy the `XX.XX CCC` requirement.

## Testing the User Stories

Each story is covered within the UI:

- Input accepts numbers only and updates derived conversions.
- Both selects list USD, EUR, GBP, and JPY; selections drive the displayed amount.
- Changing only the "to" select uses the memoized lookup (no recompute of the base map).
- The result label always shows two decimals plus the currency code.

## Project Structure

- `src/App.jsx` – converter component and state
- `src/App.css` – page layout and component styles
- `src/index.css` – root-level styling
- `vite.config.js` – Vite config

## Future Enhancements

- Fetch live rates from an API with periodic refresh
- Add a conversion history with timestamps
- Provide per-currency precision tweaks (e.g., JPY with 0 decimals)
