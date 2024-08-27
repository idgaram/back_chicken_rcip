import { db } from "../utils/db.js";

export const Recipe = {
  create: (recipe) => {
    const query = "INSERT INTO recipe (name, description) VALUES (?, ?)";
    const params = [recipe.name, recipe.description];

    return new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(recipe);
        }
      });
    });
  },
};
