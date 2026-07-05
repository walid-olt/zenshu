# Presentation

--------------------

## Overview

Good morning everyone, I hope you are doing well, today I'm presenting to you my
application `Zenshu` — which translates in Japanese to `complete library`, and
this is exactly what the application is, it's a React SPA
that allows the users to browse anime and manage a personalized local library

## Features

The core features of the app consist of the following:

* Anime Discovery: Users can browse a vast catalog of anime, apply complex
filtering and view anime details
* Local Library: Users can save anime to their favorite list, add them to a
specific list such as 'watching' or 'completed' or just leave a rating, in
addition to that, the app also provides a dashboard for users to view
statistics regarding their library

## Tech stack

The application is built using the following technologies:

* React and React Router for the SPA and routing
* Shadcn and TailwindCSS for the components and styling
* React Query for data fetching and caching
* IndexDB for local storage and persistence instead of the proposed
  JSON server (more on that later)

## architecture and technical decisions

In this project I followed a feature-based architecture, where each feature has
its own folder containing all the components, hooks, and services related to that
feature. This approach allows for better organization and scalability of the codebase.
If you look around the codebase, you will see that there's hardly any manual
loading or error state handling, and that's because I'm using modern React
features such as Suspense and Error Boundaries, which allow for a more declarative
and efficient way of handling loading and error states.
As I mentioned earlier, I decided to use IndexedDB for local storage and persistence
instead of the proposed JSON server. This decision was made because IndexedDB
is a native browser API that provides a more robust and efficient way to store
and retrieve data while also providing isolation and security for the user's data.
Additionally, IndexedDB is a more suitable to real-world applications, as it allows
for offline access and synchronization of data across multiple tabs.

## closing thoughts

Thank you for your attention, I hope that my deviation from the proposed
architecture and technical decisions isn't seen as a negative thing,
but rather as an opportunity to explore and learn more about the technologies and
best practices in modern web development. I believe that this project has allowed
me to gain valuable experience and knowledge that I can apply to future projects.
Thank you again for your time, and I look forward to any questions or feedback
you may have.
