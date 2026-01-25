'use client';
import ProductGrid from '@/components/products/productGrid.jsx';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import classes from './product.module.css';


const Products = () => {
  const { cart } = useCart();
  return (
    <>
    <div className={classes.product}>
      <h1>Products</h1>
      <Link href="/product/cart">Go to Cart<span>{cart.length}</span></Link>
    </div>
      <ProductGrid />
    </>
    
  );
};

export default Products;