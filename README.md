# React Mini Catalog

## Description

**Test Task**: https://github.com/ITCase/react-test-task/tree/middle  
Mini product catalog built with React.  
Implements product listing, product details, and cart functionality using data from a pseudo API.

## Deploy
https://itcase-muannna.netlify.app/

## Features
- Product list with search, filters, and sorting
- Product details with color and size selection
- Cart with quantity management and persistence (localStorage)
- URL state sync for selected color and size
- Promo code support

## Promo Code
- `SAVE10` — 10% discount for orders over 1000 RUB

## Tech Stack
- React 18
- Redux Toolkit
- TanStack Query
- React Router
- ESLint + Prettier + Husky

## Installation
`npm install`

## Run (development)
`npm start`

## Build
`npm run build`

## Notes
- Cart state is persisted in localStorage
- In development mode, mock data is used for products with invalid data (edge-case handling)

## Scripts
- `npm start` — run dev server
- `npm run build` — production build
- `npm run lint` — fix lint issues
- `npm run format` — format code
