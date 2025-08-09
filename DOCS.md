# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
-  [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Copy `.env.example` to `.env`
Deployment is done using the Wrangler CLI.

First, you need to create a d1 database in Cloudflare.

```sh
npx wrangler d1 create <name-of-your-database>
```

Be sure to update the `wrangler.jsonc` file with the correct database name and id.

You will also need to [update the `drizzle.config.ts` file](https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit), and then run the production migration:

Run an initial database migration:

```bash
npm run auth:db:generate
npm run db:generate
npm run db:migrate
```

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

## Deployment

```bash
npm run db:migrate-production
npm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

### Resources

- [Setup Better Auth with React Router & Cloudflare D1](https://dev.to/atman33/setup-better-auth-with-react-router-cloudflare-d1-2ad4)
- [Drizzle schema](https://orm.drizzle.team/docs/sql-schema-declaration)