import { View } from "react-native";
import React from "react";
import TabsHeader from "../../components/tabs-header";
import StoreRedirection from "../../components/store/store-redirection";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function Store() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: () => <TabsHeader title="Tienda" /> }} />
      <StoreRedirection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});