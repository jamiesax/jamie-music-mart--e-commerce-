'use client';
import ProductGrid from '@/components/products/productGrid.jsx';
import { useCart } from '@/context/CartContext';
import classes from './product.module.css';
import Link from 'next/link';


const products = () => {
  const { cart } = useCart();

  return (
    <div>
    <div className={classes.product}>
      <h1>Products</h1>
      <Link href='/product/cart'>Go to Cart<span>{cart.length}</span></Link>
    </div>
      <ProductGrid />
    </div>
    
  );
};

export default products;

<button >
  Open Cart
</button>



