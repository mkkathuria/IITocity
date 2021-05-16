import React, { Component } from 'react';
import Rating from './Rating';

class Product extends Component {
  state = {};
  render() {
    const product = this.props.product;

    return (
      <div key="product._id" className="card">
        <a href="">
          <img className="medium" src={product.image} alt={product.name} />
        </a>
        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
          <div className="price">Rs. {product.price}</div>
        </div>
      </div>
    );
  }
}

export default Product;
