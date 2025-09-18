import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Card, useTheme } from "react-native-paper";
import { ShoppingListContext } from "../context/ShoppingListContext";

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;
  const { items, toggleItem } = useContext(ShoppingListContext);
  const { colors } = useTheme();

  // Encontrar item
  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text variant="titleMedium">Item não encontrado 😢</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Detalhes do Item
          </Text>

          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{item.name}</Text>

          <Text style={styles.label}>Quantidade:</Text>
          <Text style={styles.value}>{item.quantity} un.</Text>

          <Text style={styles.label}>Preço Unitário:</Text>
          <Text style={styles.value}>R$ {item.price.toFixed(2)}</Text>

          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>
            R$ {(item.quantity * item.price).toFixed(2)}
          </Text>

          <Text style={styles.label}>Status:</Text>
          <Text
            style={[
              styles.value,
              { color: item.bought ? colors.primary : colors.error },
            ]}
          >
            {item.bought ? "Comprado ✅" : "Não comprado ❌"}
          </Text>

          <Button
            mode="contained"
            onPress={() => toggleItem(item.id)}
            style={styles.button}
          >
            {item.bought ? "Desmarcar" : "Marcar como comprado"}
          </Button>

          <Button
            mode="outlined"
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            Voltar
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  card: { padding: 20, borderRadius: 12 },
  title: { textAlign: "center", marginBottom: 20, fontWeight: "bold" },
  label: { marginTop: 15, fontWeight: "bold" },
  value: { fontSize: 16, marginTop: 5 },
  button: { marginTop: 20 },
});
