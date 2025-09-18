import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, Card, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function AboutScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/fundo.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Icon name="information-outline" size={28} color={colors.primary} />
          <Text variant="headlineMedium" style={styles.title}>
            Sobre o App
          </Text>
        </View>

        {/* Conteúdo em um card */}
        <Card
          style={[styles.card, { backgroundColor: "rgba(255,255,255,0.9)" }]}
        >
          <Card.Content>
            <Text style={styles.text}>
              Este é um aplicativo de lista de compras simples, desenvolvido em
              React Native com Expo.
            </Text>
            <Text style={styles.text}>
              Você pode adicionar itens, marcar como comprado e visualizar
              detalhes de cada item.
            </Text>
          </Card.Content>
        </Card>

        {/* Botão voltar */}
        <View style={styles.footer}>
          <Button
            mode="contained"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            Voltar
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    gap: 8,
  },
  title: { fontWeight: "bold" },
  card: {
    borderRadius: 12,
    marginHorizontal: 10,
    padding: 10,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    marginTop: 30,
  },
  backButton: {
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
