'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const Cart = () => {
    const { cart, removeFromCart, quantityIncrement, quantityDecrement, cartId } = useCart();

  return (
    <>
        <h1>Your Shopping Cart</h1>
        
        <ul>
            {cart.map((item) => (
                <li key={item.cartId}>
                    <Image id={item.id} src={item.image} alt={item.name} width={200} height={200} />
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>

                    <button onClick={() => quantityDecrement(item)}>-</button>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => quantityIncrement(item)}>+</button>

                    <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
                </li>
            ))}
        </ul>
        <div className="cart-actions">
        <h2>Total Items: {cart.length}</h2>
        </div>


    <Link href="/product/cart/checkout">Check Out</Link>
    
    </>
  );
};

export default Cart;