# Responsive UI Plan

## Stack
- **Tailwind CSS v4** (breakpoints: sm:640, md:768, lg:1024, xl:1280, 2xl:1536)
- **shadcn/ui (Radix-Nova style)** — component primitives
- Current usage: `sm` in AnimeDetails pages, `md` in catalog/grid sections, `lg` in AnimeDetails layout

## Audit Summary

### Already semi-responsive
- **AnimeDetailsPage** — `sm:px-8`, `lg:grid-cols-[300px_1fr]` with sticky aside. Solid, minor tweaks needed.
- **FeaturedCollection** — `md:grid-cols-3`. OK on tablet+, cramped on mobile.
- **UserLibrary stats** — `sm:grid-cols-2 lg:grid-cols-3`. Fine.
- **AnimeCard** — self-contained, adapts to grid width.

### Needs work

| Component | Issue | Fix |
|---|---|---|
| **Navbar** | `px-8`, links overflow on mobile; no hamburger | Collapsible mobile menu, reduce padding |
| **Hero** | Fixed `h-128`, large padding, iframe offset on small screens | Responsive height, reduce padding |
| **FeaturedCollectionCard** | Fixed poster dimensions/offsets break on mobile | Fluid poster container, reduce rotation/offset |
| **AnimeSection** (Trending/Season) | `px-8`, `grid-cols-3` cards too small on mobile | `grid-cols-2` on smallest screens |
| **CatalogPage layout** | `grid-cols-4` sidebar+content with **no mobile breakpoint** → unusable on phone | Collapse sidebar into drawer/dropdown on < lg |
| **CatalogHeader** | `grid-cols-4` title + controls crammed | Stack on mobile |
| **LibraryPage** | `px-8`, tab bar scrolls horizontally | Better tab layout, responsive padding |
| **LibraryGrid** | `grid-cols-3` on mobile | `grid-cols-2` on smallest screens |
| **AnimeDetails** | Poster aside collapses ok but action buttons row wraps poorly | Better wrapping for action buttons |
| **Global Layout** | No consistent max-width/container strategy | Optional: add container constraints |

## Implementation Phases

### Phase 1 — Layout & Navigation (high impact)
1. **Navbar** — Add mobile hamburger menu with slide-out/dropdown nav; wrap "My Library" into icon-only on small screens; reduce `px-8` to `px-4` on mobile
2. **Global** — Reduce outer padding on mobile across all pages (`px-4` default, `px-8` on `md+`); consider adding `max-w-(--breakpoint-2xl) mx-auto` to main content for large screens
3. **Catalog sidebar** — Convert `<aside>` filters into a toggleable drawer/modal on screens < `lg`. Keep sticky sidebar on `lg+`

### Phase 2 — Homepage (medium impact)
4. **Hero** — Responsive height (`h-96 sm:h-128`), reduce bottom padding on mobile (`p-4 sm:p-8`), stack buttons vertically on small screens
5. **FeaturedCollection** — Reduce `px-8` to `px-4` on mobile; `FeaturedCollectionCard` poster container: replace fixed `w-44 h-44` with responsive sizing, adjust rotation/offset for small viewports
6. **AnimeSection** — Change grid from `grid-cols-3` to `grid-cols-2 sm:grid-cols-3 md:grid-cols-6`; reduce section padding on mobile

### Phase 3 — Catalog (medium impact)
7. **CatalogHeader** — Stack layout on mobile (`flex-col sm:flex-row`); wrap search/controls instead of grid
8. **Catalog grid** — `grid-cols-2 sm:grid-cols-3 md:grid-cols-6` instead of `grid-cols-3 md:grid-cols-6`
9. **Filters** — Ensure filter components (YearRange, etc.) are usable at narrow widths; wrap accordion content

### Phase 4 — Anime Details & Library (lower impact)
10. **AnimeDetails** — Ensure action button group (`FavoriteButton`, `LibraryStatusSelect`, `UserRatingSelect`) wraps gracefully on mobile
11. **LibraryPage** — Reduce `px-8` to `px-4` on mobile; improve tab bar for small screens (consider scrollable + dropdown)
12. **LibraryGrid** — `grid-cols-2 sm:grid-cols-3 md:grid-cols-6`

### Phase 5 — Polish
13. Check all `overflow-x-clip`/`overflow-hidden` for unintended clipping on small viewports
14. Verify touch target sizes (min 44px) for buttons/links
15. Test at 320px, 375px, 768px, 1024px, 1440px
16. Optional: add subtle transition on layout changes for smooth breakpoint crossing

## Guiding Principles
- Mobile-first — base styles are mobile, breakpoints add desktop
- No layout shift — prefer `grid`/`flex` over fixed dimensions
- Keep existing `motion` animations working across breakpoints
- Use Tailwind breakpoints consistently; avoid arbitrary media queries
