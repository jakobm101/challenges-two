# Title

## Value Proposition

**As a** `user` <br>
**I want to** `see more details about a movie` <br>
**so that** `so i can find out if it passes vibe check on a closer inspection` <br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

- clicking on Movie in List opens Detail view 
- it is possible to navigate back to the list
- Release Date shown
- Short description shown
- Movie Poster fills more than 30% of the screen
- App title persists from the list view
- Movie Title is second in visual hierarchy
- White space 30%

## Tasks

- [ ] create new page movies/[movieId].jsx
  - [ ] create fetch function for single Movie
- [ ] create new API interface api/movies/[movieId].js

- [ ] create Description component
- [ ] create CSS Grid for arranging components
- [ ] create ReleaseDate Component
- [ ] display App Title
- [ ] create Link__Back-Button Component
  - [ ] onClick function
  - [ ] icon from Lucide
    - [ ] npm Lucide interface
      - [ ] find out npm command
- [ ] create MoviePoster-Big Component
- [ ] ensure 30% white space
- [ ] onClick function for MovieListEntry Component