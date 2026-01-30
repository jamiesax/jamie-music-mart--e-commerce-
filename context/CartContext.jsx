'use client';
import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  quantityIncrement: () => {},
  quantityDecrement: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const generateId = () =>
  crypto.randomUUID?.() ??
  `${Date.now()}-${Math.random()}`;

const addToCart = (product) => {
  const cartItem = {
    ...product,
    cartId: generateId(),
    quantity: 1,
  };

  setCart(prevCart => [...prevCart, cartItem]);
};


  const removeFromCart = (product) => {
        return setCart((prevCart) => prevCart.filter(item => item.cartId !== product.cartId));
    };

    const quantityIncrement = (product) => {
        setCart((prevCart) => prevCart.map(item => {
            if (item.cartId === product.cartId) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        }));
    };

    const quantityDecrement = (product) => {
        setCart((prevCart) => prevCart.map(item => {
            if (item.cartId === product.cartId && item.quantity > 1) {
                return {...item, quantity: item.quantity - 1};
            }

        //     if (item.quantity <= 1) {
        //    removeFromCart(product);
        // }
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