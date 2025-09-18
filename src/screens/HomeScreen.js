import React, { useContext } from "react";
import { StyleSheet, FlatList, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, useTheme, Card, FAB } from "react-native-paper";
import { ShoppingListContext } from "../context/ShoppingListContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { items, toggleItem, removeItem } = useContext(ShoppingListContext);
  const { colors } = useTheme();

  const renderItem = ({ item }) => (
    <Card style={[styles.card, { backgroundColor: "rgba(255,255,255,0.9)" }]}>
      <Card.Content>
        <Text
          style={[
            styles.itemText,
            item.bought && {
              textDecorationLine: "line-through",
              color: colors.outline,
            },
          ]}
        >
          {item.name} — {item.quantity} un. — R$ {item.price.toFixed(2)}
        </Text>
        <Text style={styles.totalText}>
          Total: R$ {(item.quantity * item.price).toFixed(2)}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained-tonal" onPress={() => toggleItem(item.id)}>
          {item.bought ? "Desmarcar" : "Marcar"}
        </Button>
        <Button
          mode="outlined"
          textColor={colors.error}
          onPress={() => removeItem(item.id)}
        >
          Remover
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Details", { id: item.id })}
        >
          Detalhes
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/fundo.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Cabeçalho com ícone e título */}
        <View style={styles.header}>
          <Icon name="cart-outline" size={28} color={colors.primary} />
          <Text variant="headlineMedium" style={styles.title}>
            Lista de Compras
          </Text>
        </View>

        {/* Lista de itens */}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum item na lista 😢</Text>
          }
          contentContainerStyle={{ paddingBottom: 140, paddingHorizontal: 8 }}
        />

        {/* Rodapé com botão Sobre */}
        <View style={styles.footer}>
          <Button
            mode="outlined"
            style={styles.aboutButton}
            labelStyle={{ fontSize: 16 }}
            onPress={() => navigation.navigate("About")}
          >
            Sobre
          </Button>
        </View>

        {/* Botão flutuante para adicionar item */}
        <FAB
          icon="plus"
          style={[styles.fab, { backgroundColor: colors.primary }]}
          color={colors.onPrimary}
          onPress={() => navigation.navigate("AddItem")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    gap: 8,
  },
  title: { fontWeight: "bold" },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  aboutButton: {
    minWidth: 120, // impede que o texto fique "..."
    borderRadius: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#555",
  },
  card: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 4,
  },
  totalText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
  },
});
