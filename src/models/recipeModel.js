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

  readAll: () => {
    const query = "SELECT * FROM recipe";
    const params = [];

    return new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  update: (id, recipe) => {
    const query = "UPDATE recipe SET name = ?, description = ? WHERE id = ?";
    const params = [recipe.name, recipe.description, id];

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

  delete: (id) => {
    const query = "DELETE FROM recipe WHERE id = ?";
    const params = [id];

    return new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
};
