# Superhero Application Form

## Overview

This project recreates a “Join the League” application where aspiring heroes share their alias, origin story, abilities, and overall power rating. It demonstrates controlled inputs, checkbox arrays, and validation logic inside a Vite + React environment.

## Features

- Inputs for hero name, secret identity, and origin story (select dropdown populated from an array).
- Checkbox list that allows applicants to select multiple powers; selections are tracked in state and displayed in the payload.
- Range slider that captures a 1–100 self-assessment of overall power.
- Submit button disables itself until every required field is completed, mirroring real-world form validation.
- Minimal CSS (`App.css`, `index.css`) keeps the form centered and mobile-friendly.

## Tech Stack

- React 18 + Vite
- Hooks: `useState` for controlled inputs
- Plain CSS for layout/typography
- ESLint (default Vite rules)

## Getting Started

```bash
npm install
npm run dev
```

Visit the printed URL to interact with the form. Use `npm run build` when you need a static bundle in `dist/`.

## Purpose

The form is a fun scenario for practicing common React form patterns—select dropdowns, checkbox groups, sliders, and dynamic button states—before transferring the same logic to more serious applications.
