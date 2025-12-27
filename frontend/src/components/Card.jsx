import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuClock } from "react-icons/lu";
import axios from "axios";

const Card = ({ item, setItems }) => {

  const navigate = useNavigate()

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://veggify-backend.vercel.app/api/deleterecipe/${item._id}`);
      alert("Recipe deleted successfully!");
      if (setItems) {
        setItems(prev => prev.filter(recipe => recipe._id !== item._id));
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete recipe!");
    }
    navigate('/recipes')
  };

  return (
    <div className='container mx-auto flex justify-center md:justify-start'>
      <div className='max-w-sm'>
        <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg flex flex-col h-full'>

          <img
            src={item.thumbnail_image}
            alt="thumbnail"
            className='rounded-t-lg w-full h-56 object-cover'
          />

          <div className='py-6 px-5 rounded-lg bg-white flex flex-col grow'>
            <Link to={`/items/${item._id}`}>
              <h1 className='text-gray-700 font-bold text-2xl mb-4 hover:text-gray-900'>
                {item?.name}
              </h1>
            </Link>

            <div className='flex justify-between items-center flex-wrap'>
              <button className='mt-4 py-2 px-4 font-medium rounded-lg shadow-md bg-[#fcdbdb]'>
                {item?.category}
              </button>

              <div className='flex items-center py-2 mt-4 text-gray-600'>
                <LuClock />
                <span className="ml-1">
                  {item?.more?.[0]?.prep_time}
                </span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-300 text-white py-2 rounded-lg hover:bg-red-400 transition"
              >
                Delete Recipe
              </button>

              {/* EDIT BUTTON
              <Link
                to={`/edit/${item._id}`}
                className="flex-1 bg-blue-300 text-white py-2 rounded-lg text-center hover:bg-blue-400 transition"
              >
                Edit Recipe
              </Link> */}
            </div>
          </div>

          <div className='absolute top-2 right-2 px-3 py-1 bg-white rounded-lg text-sm shadow'>
            {item?.more?.[0]?.difficulty}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card;
