import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Property {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
}

interface CartContextType {
  items: Property[];
  addToCart: (property: Property) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Property[]>([]);

  const addToCart = (property: Property) => {
    setItems(prev => {
      const exists = prev.find(item => item.id === property.id);
      if (exists) return prev;
      return [...prev, property];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};