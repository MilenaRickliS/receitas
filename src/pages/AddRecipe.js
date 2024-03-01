import React, { useState } from 'react';
import { addRecipe } from './add';

export default function AddRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      instructions,
    };
    addRecipe(newRecipe)
    // Add the new recipe to your list of recipes here
    // ...
    // Reset the form fields
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}