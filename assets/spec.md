# Project Specification

---

## Architecture & Tech Stack

- **Frontend:** React (SPA)
- **Routing:** Client-side routing with a persistent layout (Navbar)
- **External API:** [Jikan API](https://jikan.moe/) (Unofficial MyAnimeList API)
- **Data Persistence:** IndexedDB (Local browser storage) instead of the proposed JSON server

- design reference : <https://dribbble.com/shots/22982773-Kurosaw-Anime-Streaming-Web-App>
- color palette : <https://tweakcn.com/themes/cmgcc1d39000204ky3qhj3qt3>

## Database Schema (IndexedDB)

You will need to initialize an IndexedDB instance with three primary object stores:

| Object Store | Key Path   | Tracked Fields / Properties                                        |
| ------------ | ---------- | ------------------------------------------------------------------ |
| `favorites`  | `anime_id` | Anime metadata (title, image, score) for quick rendering           |
| `ratings`    | `anime_id` | `score` (1-10), `personal_note` (text), `updated_at`               |
| `library`    | `anime_id` | `status` (`Plan To Watch`, `Watching`, `Completed`), progress data |

---

## Core Routing & Interface

### Application Navigation

The application must feature a persistent **Navbar** visible across all routes:

- `/` — Home / Landing Page
- `/anime` — Anime Catalog
- `/characters` — Character Directory
- `/favorites` — User Favorites
- `/my-library` — Personal Tracker
- `/dashboard` — Stats & Insights

---

## Feature & Task Breakdown

### 1. Landing Page (`/`)

Create an engaging entry point that pulls live content immediately.

- **Hero Section:** App title, tag line, and a clear call-to-action button redirecting users to `/anime`.
- **Trending Anime:** Display the top 6 trending titles fetched from the Jikan API (showing image, title, and community score).
- **Seasonal Anime:** Display 6 titles from the current anime season.
- _Interaction:_ Clicking any anime card navigates the user to its specific detail page.

### 2. Anime Exploration Hub (`/anime`)

A robust directory to search and filter through the global anime database.

- **Catalog Grid:** Render anime cards displaying image, title, score, episode count, and release year.
- **Search & Filters:** Real-time search by name, alongside filters for genres and media type (TV, Movie, OVA).
- **Pagination:** Implement page-to-page navigation (`?page=1,2,3...`) to handle the API's paginated data structures.

### 3. Dynamic Detail Views

Deep dives into specific entities with interactive data-saving capabilities.

#### Anime Details (`/anime/{anime_id}`)

- **Information Display:** Show full metadata, including synopsis, release date, studios, genres, and an embedded video trailer if available.
- **IndexedDB Integrations:**
- Toggle Favorite status (save/remove from the `favorites` store).
- Log/Edit a personal rating (1–10 scale) and save a custom text review.
- Add to Library and assign a status (`Plan To Watch`, `Watching`, `Completed`).

- _Navigation:_ A dedicated path/button to "View Characters" leading to the sub-route.

#### Anime Characters List (`/anime/{anime_id}/characters`)

- Display a clean grid of characters specifically tied to this anime, showing their name, image, and role (Main/Supporting).

#### Character Directory & Profile (`/characters` & `/characters/{character_id}`)

- `/characters`: A general list of popular anime characters with an optional search-by-name feature.
- `/characters/{character_id}`: Dedicated profile page showing character images, detailed background lore, and a list of associated anime they appear in.

### 4. Personal Spaces (IndexedDB Driven)

These pages read and write directly to the local browser database.

- **Favorites (`/favorites`):** A curated dashboard of the user's favorited anime, with the option to instantly unfavorite items.
- **Notes & Ratings (`/my-ratings`):** A dedicated center to review, modify, or delete personal 1–10 scores and written notes.
- **My Library (`/my-library`):** A kanban or tabbed view separating anime by status (_Plan To Watch_, _Watching_, _Completed_). Users must be able to change statuses on the fly or remove titles entirely.

### 5. Analytics Dashboard (`/dashboard`)

An overview screen that aggregates local IndexedDB data into insights:

- Total count of favorited anime.
- Total number of completed titles.
- The user's calculated average score across all rated anime.
- The most frequent genre appearing in their favorites list.

---

## Technical Guardrails & Best Practices

### Asynchronous State Management

Every single asynchronous request—whether hitting the external Jikan API or reading/writing to your local IndexedDB—must safely handle three distinct states:

1. **Loading State:** Provide clear visual feedback (spinners, skeletons) while data is in flight.
2. **Error State:** Gracefully catch failed API requests or database blockers without crashing the UI.
3. **Empty State:** Show tailored placeholder UI when search queries return zero results or when a user's library/favorites collection is currently empty.

### Performance & Optimization (Stretch Goals)

If you clear the core requirements early, consider optimizing the application with these architectural upgrades:

- **Caching Layer:** Implement **React Query** (TanStack Query) to cache API responses and prevent redundant network calls on back-navigation.
- **Infinite Scroll:** Swap out standard pagination on the catalog pages for an endless scroll UX.
- **Data Visualization:** Use a lightweight charting library (like Recharts) on the Dashboard to graph genre distribution or watch-history trends.
- **UX Enhancements:** Introduce a global Light/Dark mode toggle.
