import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../InterfaceType/RootStackParamList";
import DeliveryDatePicker from "./DeliveryDatePicker";

type Props = NativeStackScreenProps<RootStackParamList, "Flavor">;

export default function FlavorScreen({ route, navigation }: Props) {
  const { quantity } = route.params;
  const [selected, setSelected] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [openDatePicker, setOpenDatePicker] = React.useState(false);

  const CakeSmell = ["socola", "vani", "Cherry", "Apple"];

  return (
    <View style={{ flex: 1, padding: 20, gap: 15 }}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        Chọn vị bánh ({quantity} cái)
      </Text>

      {/* LIST RADIO CUSTOM */}
      {CakeSmell.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => setSelected(item)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: selected === item ? "blue" : "#ccc",
          }}
        >
          {/* RADIO CIRCLE */}
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selected === item ? "blue" : "gray",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selected === item && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: "blue",
                }}
              />
            )}
          </View>

          <Text style={{ marginLeft: 10 }}>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        onPress={() => setOpenDatePicker((prev) => !prev)}
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text>
          {selectedDate ? `Ngày giao: ${selectedDate}` : "Chọn ngày giao"}
        </Text>
      </TouchableOpacity>

      {/* Hiển thị picker */}
      {openDatePicker && (
        <DeliveryDatePicker
          onSelectDate={(date) => {
            setSelectedDate(date);
            setOpenDatePicker(false); // chọn xong auto đóng
          }}
        />
      )}
      {/* BUTTONS */}
      <View style={{ gap: 10, marginTop: 20 }}>
        <Button
          title="Tiếp tục"
          onPress={() =>
            navigation.navigate("Checkout", {
              quantity,
              flavor: selected,
              date: selectedDate,
            })
          }
          disabled={!selected}
        />

        <Button
          title="Cancel"
          color="red"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={{ textAlign: "left", fontSize: 20 }}>
        $ {quantity * 10000} VND
      </Text>
    </View>
  );
}
