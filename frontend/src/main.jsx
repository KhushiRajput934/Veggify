import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import Search from './pages/Search.jsx'
import SingleProducts from './pages/SingleProducts.jsx'
import Recipes from './pages/Recipes.jsx'
import AddRecipe from './pages/AddRecipe.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ProtectedRoute from "./components/ProtectedRoute";
import EditRecipe from './pages/EditRecipe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/categories/:category',
        element: <CategoryPage />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/items/:id',
        element: <SingleProducts />,
        loader: ({params}) => fetch(`https://veggify-backend.vercel.app/api/items/${params.id}`)
      },
      {
        path: "/recipes",
        element: <Recipes />
      },
      {
        path: "/addrecipe",
        element: (
          <ProtectedRoute>
            <AddRecipe />
          </ProtectedRoute>
        )
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      // {
      //   path: "/edit/:id",
      //   element: (
      //     <ProtectedRoute>
      //       <EditRecipe />
      //     </ProtectedRoute>
      //   )
      // }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
