# AI Coding Guidelines for Diplom Project

## Architecture Overview
This is a full-stack web application with:
- **Frontend**: React 19 + Vite in `client/` directory
- **Backend**: Express.js + Node.js in `server/` directory  
- **Database**: PostgreSQL with Sequelize ORM
- **API**: REST endpoints under `/api` prefix, proxied from client to `localhost:3000`

## Key Files & Structure
- `server/server.js`: Main server file with Express app, Sequelize setup, and inline model definitions
- `client/src/App.jsx`: Root React component
- `client/src/components/`: React components (e.g., `RegistrForm.jsx` for user registration)
- `package.json`: Scripts for `dev` (client), `server`, `build` (client build)

## Development Workflows
- **Start client**: `npm run dev` (runs Vite dev server on port 5173)
- **Start server**: `npm run server` (runs Express on port 3000)
- **Build client**: `npm run build` (outputs to `client/dist/`)
- **Lint**: `npm run lint` (ESLint across project)

## Code Patterns
- **Models**: Define Sequelize models inline in `server/server.js` (e.g., `User` model with fields: login, password, fullName, phone, email)
- **API Calls**: Use `fetch()` in React components for HTTP requests to `/api/*` endpoints
- **Form Handling**: Manage form state with `useState` hook, update via `onChange` events
- **Authentication**: Use `bcryptjs` for password hashing in registration endpoint
- **Database**: Hardcoded Postgres connection; `sequelize.sync({ force: true })` drops/recreates tables on server restart

## Conventions
- **Imports**: ES modules (`import`/`export`)
- **Styling**: CSS files in `client/public/` and component-level styles
- **Error Handling**: Basic `.catch()` on fetch promises; minimal server-side validation
- **Language**: Mix of English and Russian in UI text and comments

## Common Tasks
- **Add new API endpoint**: Define route in `server/server.js` under `/api` path
- **Add React component**: Create in `client/src/components/`, import in `App.jsx`
- **Database changes**: Modify model definitions and restart server (force sync drops data)
- **Proxy setup**: Vite config proxies `/api` to backend automatically

## Dependencies
- **Frontend**: React, Vite, ESLint with React plugins
- **Backend**: Express, Sequelize, pg, bcryptjs
- **Dev**: TypeScript types for React (not used in code yet)</content>
<parameter name="filePath">c:\Users\Компьютерный Мир\OneDrive\Рабочий стол\Diplom\.github\copilot-instructions.md