# React Forms Playground

## Overview

This Vite workspace gathers several small components that exercise controlled inputs, refs, interval timers, and simple counters. It is ideal for experimenting with React hooks in isolation before integrating them into larger products.

## Components & Features

- **Header** – Static navigation/header bar styled via `App.css`.
- **OTPGenerator** – Creates a six-digit one-time password, disables the button for five seconds, and shows a countdown until regeneration.
- **Timer** – Basic stopwatch built with `useRef` and `setInterval`, featuring start/stop/resume controls.
- **Form** – RSVP form demonstrating controlled inputs, checkbox handling, and a synthesized confirmation message.
- **SimpleForm** – Minimal example of using `useRef` to read unchecked inputs without storing them in state.
- **Counter** – One-button counter showing that even tiny interactions can reuse the same app shell.

## Tech Stack

- React 18 + Vite
- CSS modules (`App.css`, `Form.css`, `Timer.css`, etc.) for layout
- ESLint (default Vite rules)

## Getting Started

```bash
npm install
npm run dev
```

Open the dev server URL to interact with every component stacked on a single page. Run `npm run build` for a production-ready bundle in `dist/`.

## Purpose

The project serves as a sandbox for mastering form handling patterns (`useState`, `useRef`), timers, and reusable UI blocks without the overhead of a full design system.
