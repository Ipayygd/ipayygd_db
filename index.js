import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProjectRoute from "./routes/ProjectRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProjectRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})

