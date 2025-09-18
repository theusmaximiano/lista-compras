import React, { useState, useContext } from "react";
import { StyleSheet, Alert, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button, Card, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ShoppingListContext } from "../context/ShoppingListContext";

export default function AddItemScreen({ navigation }) {
  const { addItem } = useContext(ShoppingListContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const { colors } = useTheme();

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
      bought: false,
    });

    setName("");
    setQuantity("");
    setPrice("");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/fundo.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Icon name="plus-box-outline" size={28} color={colors.primary} />
          <Text variant="headlineMedium" style={styles.title}>
            Adicionar Item
          </Text>
        </View>

        {/* Formulário dentro de um card translúcido */}
        <Card
          style={[styles.card, { backgroundColor: "rgba(255,255,255,0.95)" }]}
        >
          <Card.Content>
            <TextInput
              label="Nome do Item"
              mode="outlined"
              placeholder="Ex: Leite"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            <TextInput
              label="Quantidade"
              mode="outlined"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
              style={styles.input}
            />

            <TextInput
              label="Preço Unitário"
              mode="outlined"
              placeholder="Ex: 2.50"
              keyboardType="decimal-pad"
              value={price}
              onChangeText={setPrice}
              style={styles.input}
            />

            <Text variant="titleMedium" style={styles.totalText}>
              Total: R$ {total.toFixed(2)}
            </Text>

            <Button
              mode="contained"
              onPress={handleAdd}
              style={styles.addButton}
            >
              Adicionar
            </Button>
            <Button
              mode="outlined"
              style={styles.cancelButton}
              onPress={() => navigation.goBack()}
            >
              Cancelar
            </Button>
          </Card.Content>
        </Card>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, padding: 20, justifyContent: "center" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    gap: 8,
  },
  title: { fontWeight: "bold" },
  card: { borderRadius: 12, elevation: 2, padding: 10 },
  input: { marginBottom: 15 },
  totalText: {
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  addButton: { marginBottom: 10, borderRadius: 20 },
  cancelButton: { borderRadius: 20 },
});
