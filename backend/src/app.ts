import express from "express";

// Importing Routes
import userRoutes from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddlewareFunction } from "./middlewares/errorMiddlwareFunction.js";

const app = express();

// Middlewares
app.use(express.json());

const port = 5000;

await connectDB();

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

app.use("/api/v1/user", userRoutes);

// Error handling middleware
// Note: This Error class does not comes from express, it comes from Node's
app.use(errorMiddlewareFunction);
