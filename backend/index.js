const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// routes
const RecipeRoutes = require("./src/routes/recipeRoute");
const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute");
const AuthRoutes = require("./src/routes/authRoute");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);
app.use("/api", RecipeRoutes);
app.use("/api/auth", AuthRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
