import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "./components/InterfaceType/RootStackParamList";
import { NavigationContainer } from "@react-navigation/native";
import QuantityScreen from "./components/CakeShop/QuantityScreen";
import FlavorScreen from "./components/CakeShop/Flavor";
import Checkout from "./components/CakeShop/Checkout";
import DeliveryDatePicker from "./components/CakeShop/DeliveryDatePicker";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Quantity" component={QuantityScreen} />
          <Stack.Screen name="Flavor" component={FlavorScreen} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
