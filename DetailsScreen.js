import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ShoppingListContext } from "../context/ShoppingListContext";

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params; // Recebemos o id do item
  const { items, toggleItem } = useContext(ShoppingListContext);

  // Encontrar o item pelo id
  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Item não encontrado 😢</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Item:</Text>
      <Text style={styles.value}>{item.name}</Text>

      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>
        {item.bought ? "Comprado ✅" : "Não comprado ❌"}
      </Text>

      <Button
        title={item.bought ? "Desmarcar" : "Marcar como comprado"}
        onPress={() => toggleItem(item.id)}
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  value: { fontSize: 18, marginTop: 5 },
});
