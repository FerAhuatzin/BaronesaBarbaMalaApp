import { View, Text, TouchableOpacity } from "react-native";
import React from 'react';
import Branch from '../../components/schedule/assign-branch/branch';

export default function Schedule() {
  return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>Reservar</Text>
      <Branch lat={19.04014810319887} lng={-98.22719631779105}/>
    </View>
  );
}