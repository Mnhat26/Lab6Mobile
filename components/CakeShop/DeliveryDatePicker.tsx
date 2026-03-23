import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  onSelectDate: (date: string) => void;
};

export default function DeliveryDatePicker({ onSelectDate }: Props) {
  const [selectedDate, setSelectedDate] = useState("");

  const getNextDays = () => {
    const days: string[] = [];
    const today = new Date();

    for (let i = 0; i < 5; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      const format = d.toLocaleDateString("vi-VN", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
      });

      days.push(format);
    }

    return days;
  };

  const deliveryDays = getNextDays();

  const handleSelect = (day: string) => {
    setSelectedDate(day);
    onSelectDate(day); // gửi ra ngoài
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18 }}>Chọn ngày giao:</Text>

      {deliveryDays.map((day) => (
        <TouchableOpacity
          key={day}
          onPress={() => handleSelect(day)}
          style={{
            padding: 10,
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: selectedDate === day ? "green" : "#ccc",
            backgroundColor: selectedDate === day ? "#e6ffe6" : "white",
          }}
        >
          <Text>{day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
