import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import FoodPage from "./component/FoodPage";
import Cart from "./component/Cart";
import React, { createContext, useState } from "react";
import Success from "./component/Success";

export const UserCartContext = createContext();

function App() {
  const [userCart, setUserCart] = useState([]);

  return (
    <UserCartContext.Provider value={{ userCart, setUserCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/Kopi-Wong/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="food/:id" element={<FoodPage />} />
            <Route path="success" element={<Success/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserCartContext.Provider>
  );
}

export default App;
