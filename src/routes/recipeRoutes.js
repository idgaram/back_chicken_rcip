import express from "express";
import * as recipeControllers from "../controllers/recipeControllers.js";

const router = express.Router();

router.post("/", recipeControllers.createRecipe);

export default router;
