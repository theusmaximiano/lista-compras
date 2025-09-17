import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { ShoppingListContext } from "../context/ShoppingListContext";

export default function AddItemScreen({ navigation }) {
  const { addItem } = useContext(ShoppingListContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // cálculo do total
  const total = (parseInt(quantity) || 0) * (parseFloat(price) || 0);

  const handleAdd = () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Digite o nome do item.");
      return;
    }
    if (!quantity.trim() || isNaN(quantity) || parseInt(quantity) <= 0) {
      Alert.alert("Erro", "Digite uma quantidade válida.");
      return;
    }
    if (!price.trim() || isNaN(price) || parseFloat(price) <= 0) {
      Alert.alert("Erro", "Digite um preço válido.");
      return;
    }

    addItem({ 
      name, 
      quantity: parseInt(quantity), 
      price: parseFloat(price), 
      bought: false 
    });

    setName("");
    setQuantity(""); 
    setPrice("");   
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Item:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Leite"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Text style={styles.label}>Preço Unitário:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 2.50"
        keyboardType="decimal-pad"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>

      <Button title="Adicionar" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
});
