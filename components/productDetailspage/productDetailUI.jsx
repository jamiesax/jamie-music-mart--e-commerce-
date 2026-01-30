'use client'
import Image from 'next/image';
import classes from './productDetail.module.css'
import { useCart } from '@/context/CartContext.jsx'
import Link from 'next/link';

const ProductDetailUI = ({ item }) => {
  const { addToCart } = useCart()

  function handleAddToCart () {
    addToCart(item)
  } 

  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image className={classes.image} src={item.image} alt={item.name} width={400} height={400}/>
      </div>
        <h2 className={classes.name}>{item.name}</h2>
        <p className={classes.price}>{item.price}</p>
        <p className={classes.description}>{item.description}</p>
        <button onClick={handleAddToCart}>Add To Cart</button>
        <Link href={'/'}>home</Link>
    </div>
  );
};

export default ProductDetailUI;