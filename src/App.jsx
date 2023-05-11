import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import Items from "./components/Items.jsx";

import "./App.css";
import { useState } from "react";

const products = [
  { id: "a1", name: "SpecialProduct1", price: "$18" },
  { id: "a2", name: "SpecialProduct2", price: "$24" },
  { id: "a3", name: "SpecialProduct3", price: "$54" },
  { id: "a4", name: "SpecialProduct4", price: "$22" },
  { id: "a5", name: "SpecialProduct5", price: "$10" },
  { id: "a6", name: "SpecialProduct6", price: "$38" },
  { id: "a7", name: "SpecialProduct7", price: "$10" },
  { id: "a8", name: "SpecialProduct8", price: "$38" },
];

function App() {
  const [btn, setbtn] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const product = products.find((x) => x.id === item);
    setCart((prevState) => [...prevState, product]);
    setbtn((prevState) => [...prevState, item]);
  };

  const removeFromCart = (item) => {
    const b = cart;
    const filteredProducts = b.filter((x) => x.id !== item);
    setCart(filteredProducts);
    const filteredId = btn.filter((x) => x !== item);
    setbtn(filteredId);
    // console.log(cart);
    // setbtn((prevState) => [...prevState, item]);
  };
  console.log(btn);
  console.log(cart);
  return (
    <div className="App">
      <Navbar cartcount={cart.length} />
      {/* <Cart props={cart} className="flex" /> */}
      <div className="showcase h-80 flex justify-center items-center bg-black">
        <div className="show text-white font-semibold text-3xl">
          Showcase your Style
        </div>
      </div>
      <Items
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        btn={btn}
      />
    </div>
  );
}

export default App;
