import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/mongodb";
import { corsMiddleware } from "./middleware/cors";
import contactRoutes from "./routes/contact";
import careersRoutes from "./routes/careers";

const app = express();
const PORT = parseInt(process.env.PORT_SERVER || "5000", 10);

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "W3AppDevelopers API is running", timestamp: new Date().toISOString() });
});

app.use("/api/contact", contactRoutes);
app.use("/api/careers", careersRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Express API server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

startServer();
