import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { ShoppingListContext } from "../context/ShoppingListContext";

export default function HomeScreen({ navigation }) {
  const { items, toggleItem, removeItem } = useContext(ShoppingListContext);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text
          style={[
            styles.itemText,
            item.bought && { textDecorationLine: "line-through", color: "gray" },
          ]}
        >
          {item.name} — {item.quantity} un. — R$ {item.price.toFixed(2)}
        </Text>
        <Text style={styles.totalText}>
          Total: R$ {(item.quantity * item.price).toFixed(2)}
        </Text>
      </View>

      <View style={styles.itemButtons}>
        <Button
          title={item.bought ? "Desmarcar" : "Marcar"}
          onPress={() => toggleItem(item.id)}
        />
        <Button
          title="Remover"
          color="red"
          onPress={() => removeItem(item.id)}
        />
        <Button
          title="Detalhes"
          onPress={() => navigation.navigate("Details", { id: item.id })}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum item na lista 😢</Text>
        }
      />

      <View style={styles.buttons}>
        <Button
          title="Adicionar Item"
          onPress={() => navigation.navigate("AddItem")}
        />
        <Button title="Sobre" onPress={() => navigation.navigate("About")} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#888",
  },
  itemButtons: { flexDirection: "row", justifyContent: "space-between", width: 250 },
  itemContainer: {
    padding: 15,
  },
});
