import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ItemRow({ item, onToggle, onRemove, onPress }) {
  return (
    <View style={styles.row}>
      {/* Ao tocar no item, chama onPress (abre DetailsScreen) */}
      <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
        <Text style={[styles.itemText, item.bought && styles.bought]}>
          {item.name}
        </Text>
      </TouchableOpacity>

      {/* Botão de remover */}
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Text style={{ color: "white" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  itemText: { fontSize: 18 },
  bought: { textDecorationLine: "line-through", color: "#888" },
  removeButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});
