'use client';
import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  quantityIncrement: () => {},
  quantityDecrement: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {  
    const uniqueId = Date.now();
    const cartItem = {
    ...product,
    cartId: Math.random().toString() + uniqueId,
    quantity: 1,
    }
  setCart((prevCart) => [...prevCart, cartItem]);
  }

  const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== product.id));

        
    };

    const quantityIncrement = (product) => {
        setCart((prevCart) => prevCart.map(item => {
            if (item.id === product.id) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        }));
    };

    const quantityDecrement = (product) => {
        setCart((prevCart) => prevCart.map(item => {
            if (item.id === product.id && item.quantity > 1) {
                return {...item, quantity: item.quantity - 1};
            }

            if (item.quantity <= 1) {
           removeFromCart(product);
        }
            return item;
        }));
    };


    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, quantityIncrement, quantityDecrement}}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext);