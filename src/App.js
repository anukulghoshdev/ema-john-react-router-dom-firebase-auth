
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Shop from './Components/Shop/Shop';
import Order from './Components/Orders/Order';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import ErrorPage from "./error-page";
import { productsAndCartLoaders } from './loaders/productsAndCartLoaders';



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
          path: 'Shop',
          loader: async()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'Orders',
          loader: productsAndCartLoaders,
          element: <Order></Order>
        },
        {
          path: 'Inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'About',
          element: <About></About>
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
