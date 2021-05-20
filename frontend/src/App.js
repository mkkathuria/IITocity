import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from 'react-router-dom'
// React is the object and 'react' is the module
import "./index.css";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="bgcolor row ">
        <div>
          <Link to="/" className="heading brand">
            IITocity
          </Link>
        </div>
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/cart">
            <img src="/images/cartimage.png" alt="cart" id="cartlogo" />
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </header>
      <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
        
      </main>
      <footer className="bgcolor row center">
        <div className="itemfooter">
          <a href="about.html">About us</a>
        </div>
        <div className="itemfooter">
          <a href="contact.html">Contact us</a>
        </div>
        <div className="itemfooter col">All right reserved.</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
