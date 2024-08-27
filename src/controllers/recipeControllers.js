import { Recipe } from "../models/recipeModel.js";

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: "failed to create recipe" });
  }
};

export const readAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.readAll();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).status({ error: "failed to read all recipes" });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await Recipe.update(id, data);
    res.status(202).send(`recipe with id ${id} was succesfully updated`);
  } catch (err) {
    res.status(500).catch({ error: "failed to update" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    await Recipe.delete(id);
    res.status(202).send(`recipe with id ${id} was succesfully deleted`);
  } catch (err) {
    const id = req.params.id;

    res
      .status(500)
      .json(`failed to delete recipe at id : ${id}, error: ${err}`);
  }
};
