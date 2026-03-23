import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../InterfaceType/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, "Quantity">;

export default function QuantityScreen({ navigation }: Props) {
  const quantities = [1, 5, 8];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn số lượng bánh</Text>
      {quantities.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.button}
          onPress={() => navigation.navigate("Flavor", { quantity: item })}
        >
          <Text style={styles.buttonText}>{item} cái</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    gap: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF8C00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",

    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },

    // elevation (Android)
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
