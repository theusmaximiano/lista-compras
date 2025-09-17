import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar Provider
import { ShoppingListProvider } from "./src/context/ShoppingListContext";

// Importar as telas
import HomeScreen from "./src/screens/HomeScreen";
import AddItemScreen from "./src/screens/AddItemScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ShoppingListProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Lista de Compras" }}
          />
          <Stack.Screen
            name="AddItem"
            component={AddItemScreen}
            options={{ title: "Adicionar Item" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "Detalhes" }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: "Sobre" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ShoppingListProvider>
  );
}
