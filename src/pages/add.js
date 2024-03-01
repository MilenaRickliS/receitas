import fs from 'fs';
import path from 'path';

const recipesPath = path.join(__dirname, 'data', 'recipes.json');

export const addRecipe = (recipe) => {
  return new Promise((resolve, reject) => {
    fs.readFile(recipesPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const recipes = JSON.parse(data);
      recipes.push(recipe);
      fs.writeFile(recipesPath, JSON.stringify(recipes), (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  });
};