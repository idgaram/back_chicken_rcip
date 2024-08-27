import { Recipe } from "../models/recipeModel.js";

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: "failed to create recipe" });
  }
};
