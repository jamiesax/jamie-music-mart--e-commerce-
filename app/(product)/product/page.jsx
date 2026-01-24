'use client';
import ProductGrid from '@/components/products/productGrid.jsx';
import { useState } from 'react';


const productDetails = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
};

  return (
    <>
      <p>Items in Cart: {cart.length}</p>
      <ProductGrid addToCart={addToCart} />
    </>
  );
};

export default productDetails;