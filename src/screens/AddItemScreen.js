import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { ShoppingListContext } from "../context/ShoppingListContext";

export default function AddItemScreen({ navigation }) {
  const { addItem } = useContext(ShoppingListContext);
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Digite o nome do item.");
      return;
    }

    addItem({ name, bought: false });
    setName("");
    navigation.goBack(); // volta para a HomeScreen
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
});
