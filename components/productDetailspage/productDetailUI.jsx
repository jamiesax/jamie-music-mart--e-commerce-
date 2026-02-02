'use client'
import Image from 'next/image';
import classes from './productDetail.module.css'
import { useCart } from '@/context/CartContext.jsx'

const ProductDetailUI = ({ item }) => {
  const { addToCart } = useCart()

  function handleAddToCart () {
    addToCart(item)
  } 

  return (
    <div className={classes.container}>

      <div className={classes.detailsCard}>
      <div className={classes.imageWrapper}>
        <Image className={classes.image} src={item.image} alt={item.name} fill/>
      </div>
        <h2 className={classes.name}>{item.name}</h2>
        <p className={classes.price}>{item.price}</p>
        <p className={classes.description}>{item.description}</p>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailUI;