import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();
app.use(express.json());
app.use(cors());

export { app };
