import { View, Text } from "react-native";
import React from "react";
import AppointmentConfirmationFooter from "../../components/schedule/appointment-confirmation/appointment-confirmation-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
export default function AppontmentConfirmation() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScheduleHeader progress={100} totalSteps={5}/>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        ¡Gracias por reservar con Barba mala!
      </Text>
      <AppointmentConfirmationFooter/>
    </View>
  );
}