import React, { createContext, useState } from "react";

export const ShoppingListContext = createContext();

export function ShoppingListProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => [
      ...prev,
      { ...item, id: Date.now().toString() },
    ]);
  };

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ShoppingListContext.Provider
      value={{ items, addItem, toggleItem, removeItem }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}
