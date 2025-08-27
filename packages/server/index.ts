import express from "express";
import type { Request, Response } from "express";
import z from "zod";
import { chatService } from "./services/chat.service";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Server is running.");
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the API!" });
});

app.post("/api/chat", async (req: Request, res: Response) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
