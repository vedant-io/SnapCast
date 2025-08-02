# SnapCast

<h1 align="center">Screen Recording & Sharing Platform</h1>

SnapCast is a full-stack, open-source video sharing application built to demonstrate modern web development practices. It allows users to record their screen, upload the recording, and share it.

---

## Core Functionality

- **Authentication**: Users sign in via Google OAuth. User sessions and credentials are managed using the `better-auth` library.
- **Video Management**:
  - **Screen Recording**: In-browser screen capture functionality using the `MediaRecorder` API.
  - **Uploading**: Users can upload video files and thumbnails. The backend generates secure, temporary upload URLs for a service called Bunny.net, where the files are stored.
  - **Video Playback**: Videos are streamed from Bunny.net and embedded in the player.
- **API & Data**:
  - A RESTful API built with Next.js API Routes.
  - The database schema (for users, videos, etc.) is defined and managed with Drizzle ORM.
- **Frontend**:
  - A responsive UI built with React, TypeScript, and Tailwind CSS.
  - Server-side rendering (SSR) and static site generation (SSG) for performance.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: [Better-Auth](https://github.com/Vdav0/better-auth)
- **File Storage**: [Bunny.net](https://bunny.net/)

## Project Structure

The project is organized to separate concerns, making it easier to navigate and maintain.

```
/
├── app/                # Next.js App Router: Contains all routes and UI.
│   ├── (auth)/         # Auth-related routes (e.g., /sign-in).
│   ├── (root)/         # Core application routes after login.
│   └── api/            # API endpoints.
├── components/         # Shared, reusable React components.
├── constants/          # Application-wide constants.
├── drizzle/            # Drizzle ORM schema and migration files.
├── lib/                # Core application logic and utilities.
│   ├── actions/        # Server-side functions (data fetching, mutations).
│   ├── hooks/          # Custom client-side React hooks.
│   └── utils.ts        # Helper functions.
├── public/             # Static assets like images and icons.
└── ...                 # Root configuration files.
```

## Local Development Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/en/) (v20 or newer)
- A running [PostgreSQL](https://www.postgresql.org/download/) instance.

### 2. Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/snapcast.git
    cd snapcast
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### 3. Environment Configuration
Create a `.env.local` file in the project root and populate it with the following variables.

```env
# Drizzle ORM connection string for your PostgreSQL database.
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# A secret key for signing authentication tokens. Generate with `openssl rand -base64 32`.
AUTH_SECRET="your_auth_secret"

# Google OAuth credentials from your Google Cloud project.
AUTH_GOOGLE_ID="your_google_client_id"
AUTH_GOOGLE_SECRET="your_google_client_secret"

# Bunny.net credentials for file storage.
BUNNY_API_KEY="your_bunny_api_key"
BUNNY_STORAGE_ZONE_NAME="your_bunny_storage_zone_name"
BUNNY_PULL_ZONE_URL="your_bunny_pull_zone_url"
```

### 4. Database Migration
Apply the database schema to your PostgreSQL instance.

```bash
npm run db:push
```
*Note: This command uses `drizzle-kit` to push the schema changes. For production, you should generate and run migration files.*

### 5. Running the Application
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will generate an optimized version of the application in the `.next` directory. You can then start the production server with `npm start`.

The application can be deployed to any platform that supports Node.js, such as a personal server, AWS, or Heroku.

---

This project is for educational and demonstration purposes. Feel free to fork, modify, and use it as a reference for your own projects.
