import React from 'react';
import chairImage from '../assets/chair.jpg';
import laptopImage from '../assets/laptop.jpg';
import SweaterImage from '../assets/Sweater.jpg';

const products = [
  { id: 1, name: 'Vintage Chair', price: '$50', image: chairImage },
  { id: 2, name: 'Laptop', price: '$300', image: laptopImage },
  { id: 3, name: 'Sweater', price: '$20', image:  SweaterImage },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
