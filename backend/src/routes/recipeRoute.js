const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");
const Item = require("../model/ItemModel");

// const {
//   updateRecipe,
//   getRecipeById,
// } = require("../controllers/recipeController");

// ADD recipe
router.post("/addrecipe", verifyToken, async (req, res) => {
  try {
    const recipe = new Item(req.body);
    await recipe.save();
    res.status(201).json({ message: "Recipe added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add recipe" });
  }
});

// // GET recipe for EDIT
// router.get("/:id", getRecipeById);

// // UPDATE recipe (admin only)
// router.put("/:id", verifyToken, isAdmin, updateRecipe);

router.delete("/deleterecipe/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete recipe" });
  }
});

module.exports = router;
