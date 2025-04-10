import { View, Text } from "react-native";
import React from "react";
import StoreRedirection from "../../components/store/store-redirection";

export default function Store() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Tienda
      </Text>
      <StoreRedirection />
    </View>
  );
}
