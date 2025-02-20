// src/context/CartContext.jsx

import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Eliminar del carrito
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
