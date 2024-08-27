import express from "express";
import { initDB } from "./utils/db.js";
import recipeRoute from "./routes/recipeRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/recipes", recipeRoute);

initDB();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
