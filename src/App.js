
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Shop from './Components/Shop/Shop';
import Order from './Components/Orders/Order';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import ErrorPage from "./error-page";
import { productsAndCartLoaders } from './loaders/productsAndCartLoaders';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoutes from './Routes/PrivateRoutes';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          loader: async()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/Shop',
          loader: async()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/Orders',
          loader: productsAndCartLoaders,
          element: <Order></Order>
        },
        {
          path: '/Inventory',
          element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path: '/About',
          element: <About></About>
        },
        {
          path: '/shipping',
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path: '/Login',
          element: <Login></Login>
        },
        {
          path: '/Signup',
          element: <Signup></Signup>
        },
      ]
    
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
