import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ShoppingListContext } from "../context/ShoppingListContext";
import ItemRow from "../components/ItemRow";

export default function HomeScreen({ navigation }) {
  const { items, toggleItem, removeItem } = useContext(ShoppingListContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Lista de Compras</Text>

      {/* Lista de itens */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemRow
            item={item}
            onToggle={() => toggleItem(item.id)} // ainda pode marcar/desmarcar
            onRemove={() => removeItem(item.id)}
            onPress={() => navigation.navigate("Details", { id: item.id })} // abre Details
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum item na lista 😢</Text>
        }
      />

      {/* Botões para navegar */}
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
});
