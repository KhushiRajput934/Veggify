import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const categoryMenuMap = {
  Breakfast: 1,
  Lunch: 2,
  Entrees: 3,
  Sides: 4,
  Desserts: 5,
  Drinks: 6
};

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: "",
    thumbnail_image: "",
    category: "",
    menuId: "",
    instructions: "",
    ingredients: [{ name: "", quantity: "" }],
    prep_time: "",
    cook_time: "",
    servings: "",
    difficulty: "",
    source: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setFormData({
        ...formData,
        category: value,
        menuId: categoryMenuMap[value] || ""
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const updated = [...formData.ingredients];
    updated[index][field] = value;
    setFormData({ ...formData, ingredients: updated });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: "", quantity: "" }]
    });
  };

  const removeIngredient = (index) => {
    const updated = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (
      !formData.name ||
      !formData.thumbnail_image ||
      !formData.category ||
      !formData.instructions ||
      !formData.prep_time ||
      !formData.cook_time ||
      !formData.servings ||
      !formData.source
    ) {
      setMessage("Please fill all required fields ❗");
      return;
    }

    const payload = {
      name: formData.name,
      thumbnail_image: formData.thumbnail_image,
      category: formData.category,
      menuId: Number(formData.menuId),
      instructions: formData.instructions,
      ingredients: formData.ingredients,
      tags: [],
      comments: [],
      more: [
        {
          prep_time: formData.prep_time,
          cook_time: formData.cook_time,
          servings: formData.servings,
          difficulty: formData.difficulty,
          source: formData.source
        }
      ]
    };

    try {
      await axios.post("https://veggify-backend.vercel.app/api/addrecipe", payload);
      setMessage("Recipe added successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setMessage("Failed to add recipe!");
    }
  }; 

  const navigate = useNavigate()

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-red-50">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {message && <p className="mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Recipe Name" onChange={handleChange} className="w-full border p-3 rounded" />
        <input name="thumbnail_image" placeholder="Image URL" onChange={handleChange} className="w-full border p-3 rounded" />

        <select name="category" onChange={handleChange} className="w-full border p-3">
          <option value="">Select Category</option>
          {Object.keys(categoryMenuMap).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input name="menuId" value={formData.menuId} disabled className="w-full border p-3" />

        <textarea name="instructions" placeholder="Instructions" onChange={handleChange} className="w-full border p-3" />

        <h3 className="font-semibold">Ingredients</h3>
        {formData.ingredients.map((ing, i) => (
          <div key={i} className="flex gap-2">
            <input placeholder="Name" value={ing.name} onChange={e => handleIngredientChange(i, 'name', e.target.value)} className="border p-2 w-1/2" />
            <input placeholder="Quantity" value={ing.quantity} onChange={e => handleIngredientChange(i, 'quantity', e.target.value)} className="border p-2 w-1/2" />
            {i > 0 && <button type="button" onClick={() => removeIngredient(i)}>❌</button>}
          </div>
        ))}

        <button type="button" onClick={addIngredient} className="text-red-400">+ Add Ingredient</button>

        <h3 className="font-semibold pt-4">More Details</h3>
        <input name="prep_time" placeholder="Prep Time" onChange={handleChange} className="w-full border p-3 rounded" />
        <input name="cook_time" placeholder="Cook Time" onChange={handleChange} className="w-full border p-3 rounded" />
        <input name="servings" placeholder="Servings" onChange={handleChange} className="w-full border p-3 rounded" />

        <select name="difficulty" onChange={handleChange} className="w-full border p-3 rounded">
          <option value="" >Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <input name="source" placeholder="Source" onChange={handleChange} className="w-full border p-3 rounded" />

        <button type="submit" className="bg-red-400 text-white px-6 py-3 rounded">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
