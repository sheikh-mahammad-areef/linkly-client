# Linkly Client

Linkly Client is the frontend for a modern bookmark manager built with the MERN stack. It provides a clean and responsive UI to manage your saved links.

## Features

- User signup and login
- Create, read, update, and delete bookmarks
- Organize links with titles, descriptions, and URLs
- Responsive design for desktop and mobile

## Tech Stack

- React
- React Router
- Axios (for API calls)
- CSS / Tailwind (or your preferred styling)

## Getting Started

1. Clone the repository:
git clone <your-client-repo-url>
cd linkly-client


2. Install dependencies:
npm install

3. Configure environment:
- Create a `.env` file
- Add your backend API base URL, for example:
  ```
  VITE_API_URL=http://localhost:5000/api
  ```

4. Run the development server:
npm run dev


5. Open the app in your browser:
- Go to `http://localhost:5173` (or the port shown in your terminal).

## Folder Structure

- `src/components` – Reusable UI components
- `src/pages` – Main app pages (Home, Login, Register, Dashboard)
- `src/services` – API helper functions
- `src/context` – Auth or global state (if used)

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm test` – Run tests (if configured)

## License

This project is for learning and personal use. You can adapt it for your own Linkly setup.