import { View, Text } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
export default function ContactAssignment() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScheduleHeader progress={80} totalSteps={5}/>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Pon tus datos de contacto
      </Text>
      <ScheduleFooter next_screen="./review-appointment"  touchable_message="Siguiente"/>
    </View>
  );
}
