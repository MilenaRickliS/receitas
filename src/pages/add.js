import IFS from 'isomorphic-filesystem';
import path from 'path-browserify';

const recipesPath = path.join(__dirname, 'data', 'receitas.json');

export const addRecipe = (recipe) => {
  return new Promise((resolve, reject) => {
    IFS.readFile(recipesPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const recipes = JSON.parse(data);
      recipes.push(recipe);
      IFS.writeFile(recipesPath, JSON.stringify(recipes), (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  });
};