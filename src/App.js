import React from "react";
// React is the object and 'react' is the module
import "./index.css";
import mytemplate from "./mytemplate.js";
import Product from "./components/Product";

function App() {
  return (
    <div className="grid-container">
      <header className="bgcolor row ">
        <div>
          <a href="index.html" className="heading brand">
            IITocity
          </a>
        </div>
        <div>
          <a href="signin.html">Sign In</a>
          <a href="cart.html">
            <img src="/images/cartimage.png" alt="cart" id="cartlogo" />
            Cart
          </a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {mytemplate.products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
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
  );
}

export default App;
