'use client';
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  quantityIncrement: () => {},
  quantityDecrement: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
  setCart([]);
  localStorage.removeItem("cart"); 
};


  const generateId = () =>
    crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;

const addToCart = (product) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(
      item => item.id === product.id
    );

    if (existingItem) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [
      ...prevCart,
      {
        ...product,
        cartId: generateId(),
        quantity: 1,
      },
    ];
  });
};


  const removeFromCart = (product) => {
    setCart(prevCart =>
      prevCart.filter(item => item.cartId !== product.cartId)
    );
  };

  const quantityIncrement = (product) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === product.cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const quantityDecrement = (product) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === product.cartId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      quantityIncrement,
      quantityDecrement,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
