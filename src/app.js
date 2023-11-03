import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import "dotenv/config";
import limiter from "./config/rateLimit.js";
const PORT = process.env.PORT || 3000;
const app = express();
app

    .use(express.json())

    .use(limiter)

    .use(cors())

    .use("/", router)

    .listen(PORT, () => console.log("server api run http://localhost:" + PORT))