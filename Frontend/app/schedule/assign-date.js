import { View, Text } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
export default function DateSelection() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScheduleHeader progress={1}/>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Seleccionar la fecha de tu cita
      </Text>
      <ScheduleFooter next_screen="./assign-barber"  touchable_message="Siguiente"/>
    </View>
  );
}
