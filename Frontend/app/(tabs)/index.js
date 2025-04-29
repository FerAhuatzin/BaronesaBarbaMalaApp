import { View, Text, FlatList, StyleSheet } from "react-native";
import React from 'react';
import Branch from '../../components/schedule/assign-branch/branch';
import BranchSelectionHeader from "../../components/schedule/branch-selection-header";
import { useState } from "react";
import { Stack } from "expo-router";
import {mockBranches}  from "../../components/schedule/assign-branch/mock-data";
import { fontSizes } from "../../constants/font-sizes";
import { commonStyles } from "../../constants/commonStyles";

export default function Schedule() {
  const [brand, setBrand] = useState("Barbamala");

  // Filtrar sucursales por marca seleccionada (convertir a minúsculas para comparar)
  const filteredBranches = mockBranches.filter(
    branch => branch.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <View style={commonStyles.pageContainer}>
      <Stack.Screen options={{ header: () => <BranchSelectionHeader brandSelection={setBrand} /> }} />
      <FlatList
        data={filteredBranches}
        renderItem={({ item }) => <Branch branch={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={commonStyles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.subTitles,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
  }
});

