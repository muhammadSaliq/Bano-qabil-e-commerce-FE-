import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Example from "./pages/example";
import Header from "./components/Header";
import { Cartcontainer } from "./context/Cartcontext";
import Cart from "./pages/cart";
import AddProduct from "./pages/AddProduct";
import { Productcontainer } from "./context/ProductContext";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";


import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:name",
    element: <Product/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

function App() {
  return (
   <>
   
    <BrowserRouter>
    <Cartcontainer>
      <Productcontainer>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:name" element={<Product/>} />
      <Route path="/product/edit/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
    </Productcontainer>
    </Cartcontainer>
    </BrowserRouter>
   
   </>
   
  );
}

export default App;
