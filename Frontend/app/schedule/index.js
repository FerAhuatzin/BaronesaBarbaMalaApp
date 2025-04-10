import { View, Text } from "react-native";
import React from "react";
import AssignServiceFooter from "../../components/schedule/assign-service/assign-service-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
export default function ServiceSelection() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScheduleHeader progress={1}/>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Selecciona tu servicio
      </Text>
      <AssignServiceFooter/>
    </View>
  );
}
