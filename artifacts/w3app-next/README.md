# W3AppDevelopers Website

A full-stack web application for W3AppDevelopers — a premium web development, digital marketing, and app creation agency based in Coimbatore.

## Tech Stack

| Layer     | Technology                            |
|-----------|---------------------------------------|
| Frontend  | Next.js 14 (App Router), TypeScript   |
| Styling   | Tailwind CSS, Framer Motion           |
| Backend   | Express.js, TypeScript                |
| Database  | MongoDB with Mongoose ODM             |
| Runtime   | Node.js 18+                           |

---

## Prerequisites

Before running this project, make sure you have installed:

1. **Node.js 18+** — [Download here](https://nodejs.org/)
2. **MongoDB** (one of the following):
   - **Local MongoDB** — [Install MongoDB Community Server](https://www.mongodb.com/try/download/community) (Windows: use `.msi` installer)
   - **MongoDB Atlas** (free cloud) — [Create free cluster](https://www.mongodb.com/cloud/atlas)

---

## Getting Started (Windows / VSCode)

### Step 1: Extract and open the project

1. Extract the downloaded ZIP file
2. Open the folder in VSCode: `File → Open Folder`
3. Open the integrated terminal: `Ctrl + ~` or `Terminal → New Terminal`

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Configure environment variables

1. Copy the example file:

   ```bash
   # Windows Command Prompt
   copy .env.example .env.local

   # Windows PowerShell
   Copy-Item .env.example .env.local
   ```

2. Open `.env.local` in VSCode and set your MongoDB URI:

   ```env
   # Local MongoDB (if installed locally)
   MONGODB_URI=mongodb://localhost:27017/w3appdevelopers

   # MongoDB Atlas (cloud)
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/w3appdevelopers
   ```

### Step 4: Run the development servers

```bash
npm run dev
```

This starts both servers concurrently:
- **Next.js frontend**: http://localhost:3000
- **Express.js API**: http://localhost:5000

Open your browser and navigate to **http://localhost:3000**

---

## Project Structure

```
w3appdevelopers/
├── public/
│   └── images/          # All website images
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── careers/
│   │   └── contact/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   ├── hooks/
│   │   ├── useReveal.ts       # Scroll animation hook
│   │   └── useCountUp.ts      # Counter animation hook
│   └── server/          # Express.js backend
│       ├── index.ts     # Server entry point
│       ├── lib/
│       │   └── mongodb.ts     # Database connection
│       ├── models/
│       │   ├── Contact.ts     # Contact form model
│       │   └── CareerApplication.ts
│       ├── routes/
│       │   ├── contact.ts     # POST /api/contact
│       │   └── careers.ts     # POST /api/careers/apply
│       └── middleware/
│           └── cors.ts
├── .env.example         # Environment variable template
├── .env.local           # Your local config (not in git)
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript config (Next.js)
├── tsconfig.server.json # TypeScript config (Express)
└── package.json         # Dependencies and scripts
```

---

## Available Scripts

| Command              | Description                                   |
|----------------------|-----------------------------------------------|
| `npm run dev`        | Start both Next.js and Express servers        |
| `npm run dev:next`   | Start only the Next.js frontend (port 3000)   |
| `npm run dev:server` | Start only the Express API (port 5000)        |
| `npm run build`      | Build both frontend and backend for production|
| `npm run start`      | Run production build                          |
| `npm run typecheck`  | TypeScript type checking                      |

---

## API Endpoints

| Method | Endpoint              | Description                    |
|--------|-----------------------|--------------------------------|
| GET    | /api/health           | Server health check            |
| POST   | /api/contact          | Submit contact/quote form      |
| GET    | /api/contact          | Get all contact submissions    |
| POST   | /api/careers/apply    | Submit job application         |
| GET    | /api/careers/applications | Get all job applications   |

---

## Pages

| Page       | Route       | Description                          |
|------------|-------------|--------------------------------------|
| Home       | /           | Landing page with all sections       |
| About      | /about      | Company info, team, mission, vision  |
| Services   | /services   | All 12 service offerings             |
| Portfolio  | /portfolio  | Filterable project showcase          |
| Blog       | /blog       | Latest articles and insights         |
| Careers    | /careers    | Job openings with application modal  |
| Contact    | /contact    | Contact form + office details        |

---

## Troubleshooting (Windows)

### MongoDB not connecting?
- Ensure MongoDB service is running: `Win + R → services.msc → MongoDB`
- Or start it manually: `net start MongoDB`

### Port already in use?
Change the ports in `.env.local`:
```env
PORT_NEXT=3001
PORT_SERVER=5001
```

### Permission errors on npm install?
Run VSCode as Administrator, or use:
```bash
npm install --no-optional
```

---

## License

© 2026 W3AppDevelopers. All Rights Reserved.
