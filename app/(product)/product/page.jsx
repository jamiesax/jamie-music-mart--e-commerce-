'use client';
import ProductGrid from '@/components/products/productGrid.jsx';
import classes from './product.module.css';
import Link from 'next/link';


const products = () => {

  return (
    <>
    <div className={classes.product}>
      <span className={classes.span}><Link href={'/product'}>↓</Link></span>
      <hr className={classes.hr}/>
      <br/>

      <h1>Products</h1>
    </div>
      <ProductGrid />
    </>
    
  );
};

export default products;

<button >
  Open Cart
</button>



