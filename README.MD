# 🐾 Cat Explorer
 
A single-page React application for browsing cats, searching by breed, and
saving your favorite felines — built with a Frutiger Aero aesthetic. Cat data
is pulled live from [The Cat API](https://thecatapi.com), and favorites persist
across page refreshes because they're saved through the API.
 
This project was refactored from an original vanilla JavaScript version into a
component-based React application using Vite and React Router.
 
## Features
 
- **Random gallery** — pull up a fresh batch of random cats with one click
- **Breed search** — search for cats by breed name (e.g. Bengal, Siamese)
- **Favorites** — save cats with the paw button and view them anytime;
  favorites persist because they're stored through the API
- **Multi-page navigation** — Home, Explore, and Favorites pages that switch
  instantly without a full page reload
## Built with
 
- **React** (functional components + hooks)
- **Vite** — build tool and dev server
- **React Router** — client-side navigation between pages
- **The Cat API** — all cat and favorites data
- **CSS** — CSS Grid, Flexbox, glassmorphism, and custom animations
## Getting started
 
### Prerequisites
 
- [Node.js](https://nodejs.org) installed
- A free API key from [thecatapi.com](https://thecatapi.com)
### Installation
 
1. Clone the repository:
```bash
   git clone https://github.com/BrittB1/cat-api-app.git
   cd cat-api-app
```
 
2. Install dependencies:
```bash
   npm install
```
 
3. Add your Cat API key to the `API_KEY` value in `src/services/api.js`.
4. Start the development server:
```bash
   npm run dev
```
 
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).
## Project structure
 
```
src/
├── components/
│   ├── Navbar.jsx       Main navigation bar
│   ├── NavItem.jsx      Reusable single navigation link
│   ├── SearchBar.jsx    Breed search input
│   ├── Gallery.jsx      Renders a Card for each cat
│   └── Card.jsx         Displays one cat + its favorite button
│
├── pages/
│   ├── Home.jsx         Landing page
│   ├── Explorer.jsx     Random cats + search results
│   └── Favorites.jsx    Saved cats
│
├── services/
│   ├── api.js           Fetch calls to The Cat API (random, search)
│   └── favorites.js     Saving/removing favorites (POST, DELETE)
│
├── App.jsx              Routes + favorites state (source of truth)
├── main.jsx             App entry point, wrapped in BrowserRouter
└── index.css            All styling and animations
```
 
## How it works
 
The app is organized around a few clear responsibilities:
 
- **`App.jsx`** sets up the routes and holds the **favorites state**. Because
  both the Explore page and the Favorites page need access to the same list of
  saved cats, the favorites state is lifted up here and passed down to both
  pages as props. This keeps a single source of truth so the two pages stay in
  sync.
- **`services/api.js`** and **`services/favorites.js`** handle all
  communication with The Cat API using `fetch()` and async/await — fetching
  random cats, searching breeds, and adding/removing favorites.
- **`Gallery.jsx`** receives a list of cats and renders a **`Card`** for each
  one. The same Gallery component is reused on both the Explore and Favorites
  pages.
- **`Card.jsx`** displays a single cat and its favorite (paw) button. It knows
  whether the cat is currently a favorite and calls back up to `App` when the
  button is clicked.
- **React Router** swaps which page is shown based on the URL. Because it's a
  single-page app, only the page content changes — the app never does a full
  browser reload, which is why navigation feels instant.
## Requirements demonstrated
 
This project was built to demonstrate core React concepts:
 
- React, JSX, and functional components
- Props (passing data and callbacks between components)
- React hooks — `useState`, `useEffect`, and `useRef`
- Five or more reusable components
- React Router navigation between multiple pages
- Fetching data from a third-party API (The Cat API)
- Asynchronous JavaScript with `fetch()` and async/await
- Conditional rendering (loading states, empty favorites, favorite button state)
- Event handling (buttons, search, favoriting)
- CSS styling and responsive design
## Authors
 
Built as a group project by **Britt** and **Julianna**.
 
- **Britt** — API integration, search, and the favorites feature
  (`services/`, `Card`, `Gallery`, `SearchBar`)
- **Julianna** — React architecture and navigation
  (`App` routing, `Navbar`, `NavItem`, `Home`, page structure)
 
