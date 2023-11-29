import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import AddProducts from "./components/AddProducts";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Logout from "./components/Logout";
import PrivateComponent from "./PrivateRoutes/PrivateComponent";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";



const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateComponent>
        <Slider />
      </PrivateComponent>
    ),
    errorElement:<Error/>,
    children:[
      {
        
          path: "/",
          element: (
            <PrivateComponent>
              <Home />
            </PrivateComponent>
          ),
        
      },
      {
        path: "/products",
        element: (
          <PrivateComponent>
            <ProductList />
          </PrivateComponent>
        ),
      },
      {
        path: "/add products",
        element: (
          <PrivateComponent>
            <AddProducts />
          </PrivateComponent>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateComponent>
            <Contact />
          </PrivateComponent>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateComponent>
           <ProductDetails/>
          </PrivateComponent>
        ),
      },
    ]
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: (
      <PrivateComponent>
        <Logout />
      </PrivateComponent>
    ),
  },
]);



function App() {
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
