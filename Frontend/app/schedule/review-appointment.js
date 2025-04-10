import { View, Text } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
export default function ReviewAppointment() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScheduleHeader progress={1}/>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Confirma que todo se vea bien
      </Text>
      <ScheduleFooter next_screen="./appointment-confirmation" touchable_message="Reservar"/>
    </View>
  );
}