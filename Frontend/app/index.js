import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function Index() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Los que saben como tratar tu cabello
      </Text>
      <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
        <Text style={{ fontSize: 18, color: "blue", margin: 20 }}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}