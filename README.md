# Enterprise Agency CMS & Management Platform - w3appdevelopers.com

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)
![React](https://img.shields.io/badge/Frontend-React_Vite-cyan.svg)
![Node](https://img.shields.io/badge/Backend-Node.js_Express-green.svg)
![Docker](https://img.shields.io/badge/DevOps-Docker_Nginx-blue.svg)

A highly scalable, containerized MERN stack web application built as a comprehensive management platform and CMS for digital agencies. This project features a modular backend, a high-performance React client, real-time bidirectional communication, and a robust deployment infrastructure.

## Key Features

* **Advanced Authentication & Authorization:** Secure, role-based access control (Admin/User) utilizing JWT and bcrypt, complete with custom route protection.
* **Content Management System (CMS):** Fully functional CMS to manage blogs, dynamic service categories, and client portfolios.
* **Real-Time Communication:** Instant, system-wide user notifications and alerts powered by WebSockets (`socket.io`).
* **Media Management:** Seamless, optimized multi-format file uploads and asset delivery integrated with Cloudinary and Firebase.
* **Interactive Analytics Dashboard:** Dynamic data visualization charts, customizable tables, and comprehensive logging for administrators.
* **Containerized Infrastructure:** Fully Dockerized client and server environments, utilizing Nginx as a secure reverse proxy for optimal request routing.
* **Automated CI/CD Workflows:** Custom shell scripts for automated deployments (`deploy.sh`) and secure database backups (`backup.sh`).

## Technology Stack

**Frontend:**
* React.js (Bootstrapped with Vite)
* State Management: Redux Toolkit & React Context API
* Styling: Tailwind CSS
* Routing: React Router DOM (with protected Admin/Auth layouts)

**Backend:**
* Node.js & Express.js
* Database: MongoDB with Mongoose ODM
* Real-Time: Socket.io
* Security: JSON Web Tokens (JWT), custom validation middlewares

**DevOps & Cloud Integration:**
* Docker & Docker Compose
* Nginx Reverse Proxy
* Cloudinary (Image/Video processing)
* Firebase
* Automated Bash Scripting

## High-Level Architecture

```text
project-root/
├── client/                 # React (Vite) Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI (Modals, Charts, Forms)
│   │   ├── pages/          # Dashboard, Blogs, Analytics, etc.
│   │   ├── layouts/        # AdminLayout, AuthLayout, MainLayout
│   │   ├── redux/          # Redux slices and store
│   │   └── hooks/          # Custom hooks (useAuth, useFetch)
├── server/                 # Node.js REST API
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth, Upload, Error handling
│   ├── models/             # Mongoose schemas
│   ├── socket/             # WebSocket configurations
│   └── utils/              # Token generation, pagination
├── docker/                 # Containerization configs (Dockerfiles, compose)
├── nginx/                  # Nginx proxy configurations
├── scripts/                # CI/CD and Backup shell scripts
└── docs/                   # API and Deployment documentation
```
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` files. 

**Server (`server/.env`)**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FIREBASE_CONFIG=your_firebase_credentials
EMAIL_HOST=your_smtp_host
EMAIL_USER=your_smtp_user
EMAIL_PASS=your_smtp_password
```

## How to Run
1. Run `npm.cmd install` to install dependencies.
2. Run `npm.cmd run dev` to spin up the local server.
