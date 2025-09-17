import React, { createContext, useState } from "react";

// Criar o Contexto
export const ShoppingListContext = createContext();

// Provider que vai envolver o App
export function ShoppingListProvider({ children }) {
  // Estado global da lista de compras
  const [items, setItems] = useState([]);

  // Função para adicionar item
  const addItem = (item) => {
    setItems((prev) => [...prev, { id: Date.now().toString(), ...item }]);
  };

  // Função para remover item
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Função para marcar item como comprado
  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return (
    <ShoppingListContext.Provider
      value={{ items, addItem, removeItem, toggleItem }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}
