import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBooks from "../pages/AddBooks/AddBooks";
import Blog from "../pages/Home/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import CardDetails from "../pages/CardDetails/CardDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path : '/addbook',
          element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        },
        {
          path :'/blog',
          element:<Blog></Blog>
        },
        {
          path :'/bookvisit/:id',
          element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/books/${params.id}`)
          
        } 

      ]
    },
  ]);

  export default router;