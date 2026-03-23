// screens/CheckoutScreen.tsx
import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../InterfaceType/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, "Checkout">;

export default function Checkout({ route, navigation }: Props) {
  const { quantity, flavor, date } = route.params;

  const total = quantity * 10000;

  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 10, padding: 20 }}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>Thanh toán</Text>

      <Text>Số lượng: {quantity}</Text>
      <Text>Vị: {flavor}</Text>
      <Text>Tổng tiền: {total} VND</Text>
      <Text style={{ fontSize: 16, color: "gray" }}>{date}</Text>

      <Button
        title="Xác nhận thanh toán"
        onPress={() => {
          Alert.alert("Đã thanh toán!");
          navigation.popToTop(); // quay về màn đầu
        }}
      />
    </View>
  );
}
