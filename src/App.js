import React from "react";
// React is the object and 'react' is the module
import "./index.css";
import mytemplate from "./mytemplate.js";

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
              <div key="product._id" className="card">
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">Rs. {product.price}</div>
                </div>
              </div>
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
