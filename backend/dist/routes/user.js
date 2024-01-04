import express from "express";
import { newUser } from "../controllers/userControllers.js";
const app = express.Router();
//
app.post("/new", newUser);
export default app;
