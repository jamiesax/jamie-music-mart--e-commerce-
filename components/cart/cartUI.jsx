'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import classes from './cart.module.css';

const CartUI = () => {
    const { cart, removeFromCart, quantityIncrement, quantityDecrement } = useCart();

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const cartIsEmpty = cart.length === 0;

    if (cartIsEmpty) {
        return (
            <div className={classes.emptyCart}>
                <h2>Your cart is currently empty.</h2>
            </div>
        );
    }
    

  return (

        <div className={classes.cartContainer}>
        <h1 className={classes.cartTitle}>Your Shopping Cart</h1>
        
        <ul className={classes.cartList}>
            {cart.map((item) => (
                <li key={item.cartId} className={classes.cartItem}>
                    <Link href={`/product/${item.id}`}>
                        <div className={classes.imageWrapper}>
                        <Image id={item.id} src={item.image} alt={item.name} width={200} height={200} />
                        </div>
                        
                    </Link>
                        <h2 className={classes.itemName}>{item.name}</h2>
                        <p className={classes.itemPrice}>Price: ${item.price}</p>
                    
                    <button className={classes.itemActions} onClick={() => quantityDecrement(item)}>-</button>
                    <p className={classes.itemQty}>Quantity: {item.quantity}</p>
                    <button className={classes.itemActions} onClick={() => quantityIncrement(item)}>+</button>

                    <button className={classes.removebtn} onClick={() => removeFromCart(item)}>Remove From Cart</button>
                </li>
            ))}
        </ul>
        <div className={classes.cartFooter}>
        <h2 className={classes.cartTotal}>Total: ${cartTotal}</h2>
        <Link href="/product/cart/checkout"><button className={classes.checkoutBtn} >Check Out</button></Link>
        </div>
        </div>

  );
};

export default  CartUI;