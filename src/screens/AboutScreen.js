import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Este é um aplicativo de lista de compras simples, desenvolvido em React
        Native com Expo.
      </Text>
      <Text style={styles.text}>
        Você pode adicionar itens, marcar como comprado e visualizar detalhes de
        cada item.
      </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
});
