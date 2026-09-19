# DevAtlas Monorepo

This is a full-stack monorepo managed with [Turborepo](https://turbo.build/repo), designed for seamless end-to-end development.

## 🏗️ Architecture

The workspace is divided into modular applications and shared packages:

### Apps
- **`web`**: A [Next.js](https://nextjs.org/) frontend application.
- **`server`**: A [NestJS](https://nestjs.com/) backend API server.

### Packages
- **`@repo/db`**: The database layer powered by [Prisma ORM v7](https://www.prisma.io/) and PostgreSQL.
- **`@workspace/ui`**: A shared UI component library built with [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS.
- **`@workspace/eslint-config`**: Shared `eslint` configurations.
- **`@workspace/typescript-config`**: Shared `tsconfig.json` configurations used throughout the monorepo.

## 🚀 Getting Started

### Prerequisites
- Node.js
- [pnpm](https://pnpm.io/)
- PostgreSQL database running locally or in the cloud.

### 1. Environment Setup

Ensure you have your environment variables set up. 

In `packages/db/.env` and `apps/server/.env`, add your PostgreSQL database URL:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/my_database"
```

### 2. Install Dependencies
Run the following from the root of the project to install all dependencies across the workspace:
```bash
pnpm install
```

### 3. Database Initialization
Push the database schema to your PostgreSQL instance and generate the Prisma Client:
```bash
pnpm --filter @repo/db run db:push
```

### 4. Start Development Server
Start all applications and packages simultaneously in watch mode:
```bash
pnpm run dev
```

Your Next.js app will be running at `http://localhost:3000` and your NestJS server will start on its default port.

## 🧱 Working with UI Components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the UI components in the `packages/ui/src/components` directory.

To use the components in your app, import them from the `ui` package:

```tsx
import { Button } from "@workspace/ui/components/button";
```
