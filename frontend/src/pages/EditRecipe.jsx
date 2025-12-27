import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchRecipe = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/recipes/${id}`
      );
        setFormData(res.data);
      } catch (error) {
        alert("Failed to load recipe");
        navigate("/recipes");
      }
    };

    fetchRecipe();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/recipes/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Recipe updated successfully");
      navigate("/recipes");
    } catch (error) {
      alert(
        error.response?.data?.message || "Update failed"
      );
    }
  };

  if (loading) {
    return (
      <p className="text-center mt-10 text-lg">
        Loading recipe...
      </p>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">
        Edit Recipe
      </h2>

      <input
        name="title"
        placeholder="Title"
        className="border p-2 w-full mb-3"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full mb-3"
        value={formData.description}
        onChange={handleChange}
      />

      <textarea
        name="ingredients"
        placeholder="Ingredients"
        className="border p-2 w-full mb-3"
        value={formData.ingredients}
        onChange={handleChange}
      />

      <textarea
        name="instructions"
        placeholder="Instructions"
        className="border p-2 w-full mb-3"
        value={formData.instructions}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        className="border p-2 w-full mb-4"
        value={formData.image}
        onChange={handleChange}
      />

      <button
        onClick={handleUpdate}
        className="bg-green-600 text-white w-full py-2 rounded"
      >
        Update Recipe
      </button>
    </div>
  );
};

export default EditRecipe;
