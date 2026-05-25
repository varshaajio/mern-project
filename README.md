# Content Management System (CMS) - MERN Stack

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)](https://react.dev/)

A professional, full-stack Content Management System (CMS) engineered using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform empowers administrators and content creators to seamlessly create, read, update, and delete dynamic content while providing a high-performance delivery layer for end-users.

---

## Core Features

- **Robust Authentication & Authorization:** Secure JWT-based authentication with role-based access control (RBAC) distinguishing Admin, Editor, and Viewer privileges.
- **Dynamic Content Management:** Full CRUD operations for articles, pages, categories, and tags via an intuitive rich-text block editor.
- **Media Asset Library:** Integrated media management supporting cloud storage uploads (e.g., Cloudinary/AWS S3) with automated image optimization.
- **SEO & Metadata Control:** Custom slug generation, meta titles, descriptions, and Open Graph tag management for individual content pieces.
- **Responsive Dashboard:** A modern, state-driven administrative dashboard built for mobile, tablet, and desktop monitors.
- **Secure RESTful API:** Structured backend architecture featuring rate limiting, data validation, and uniform error handling.

---

## Tech Stack

**Frontend:**
- React.js (with Functional Components & Hooks)
- State Management: Redux Toolkit / React Context API
- Routing: React Router DOM
- Styling: Tailwind CSS / Material UI / Bootstrap
- Form Handling: Formik / React Hook Form + Yup (Validation)

**Backend:**
- Node.js & Express.js framework
- Database: MongoDB via Mongoose ODM
- Authentication: JSON Web Tokens (JWT) & bcryptjs
- File Uploads: Multer + Cloudinary SDK / AWS SDK

---

## Repository Structure

```text
w3appdevelopers-cms-mern-project/
├── backend/
│   ├── config/          # Database configuration and environment setups
│   ├── controllers/     # Request handlers and business logic
│   ├── middleware/      # Auth, role-validation, and error handling middlewares
│   ├── models/          # Mongoose schemas (User, Post, Category, Media)
│   ├── routes/          # Express API route definitions
│   ├── utils/           # Helper functions (JWT generators, cloud uploaders)
│   └── server.js        # Backend entry point
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── assets/      # Images, icons, and global styles
│   │   ├── components/  # Reusable UI elements (Buttons, Inputs, Modals)
│   │   ├── context/     # Global state/auth providers
│   │   ├── pages/       # Dashboard, Login, ContentEditor, Home views
│   │   ├── services/    # API integration layer (Axios instances)
│   │   ├── App.js       # App routing and core structure
│   │   └── index.js     # Frontend entry point
│   └── package.json
└── README.md
```

## Commands
```bash
pnpm install
pnpm run dev
