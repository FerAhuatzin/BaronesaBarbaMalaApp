import { View } from "react-native";
import React from "react";
import TabsHeader from "../../components/tabs-header";
import StoreRedirection from "../../components/store/store-redirection";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { commonStyles } from "../../constants/commonStyles";

export default function Store() {
  return (
    <View style={commonStyles.pageContainer}>
      <Stack.Screen options={{ header: () => <TabsHeader title="Tienda" /> }} />
      <StoreRedirection />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
});