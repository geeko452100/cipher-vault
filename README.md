# CIPHER VAULT

A mobile-friendly cryptogram game. Each puzzle hides a quote behind a letter-substitution cipher. Tap a cipher letter, type your guess, and every matching spot fills in.

> Status: Level 1 in progress. Live link, screenshot, and CI badge will be added when the game ships.

## How it works

- Each puzzle is a public-domain quote or proverb with a category label.
- A random substitution key maps every letter A to Z to a different letter (no letter maps to itself).
- About one third of the distinct letters start revealed.
- Select a cipher letter and guess; every copy of it updates. Use Hint to reveal a letter and Check to flag wrong guesses.
- Solve every letter to win.

## How it's tested

- Unit tests (Vitest) cover the pure game logic.
- A Playwright bot plays the game in a real browser from a fixed `?seed=` and expects the SOLVED screen.

## Tech

React, TypeScript, Vite, Vitest, Playwright, ESLint, GitHub Actions, GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
npm test
```

## Design notes

Game logic lives in pure functions in `src/lib/`, separate from the UI. That keeps it deterministic (seeded randomness) and easy to test without a browser.

## What's next

Planned ideas include a daily puzzle, difficulty levels, and installable PWA support.
