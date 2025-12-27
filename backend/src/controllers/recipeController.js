const Recipe = require("../model/ItemModel");

exports.updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found ❌" });
    }

    res.json({
      message: "Recipe updated successfully ✅",
      recipe: updatedRecipe,
    });
  } catch (error) {
    res.status(500).json({ message: "Update failed ❌" });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipe" });
  }
};