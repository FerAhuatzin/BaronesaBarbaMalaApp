import { View, Text} from "react-native";
import React from 'react';
import NextAppointment from "../../components/my-appointments/next-appointment";
import Appointment from "../../components/my-appointments/appointment";

export default function MyAppointments() {
  return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>Mis citas</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>Próximas</Text>
      <NextAppointment/>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>Pasadas</Text>
      <Appointment/>
    </View>
  );
}