import { View, Text } from "react-native";
import React from 'react';
import GeneralHeader from "../../../components/general_header";
import EditBody from '../../../components/my-appointments/appointment-detail/edit/edit-body';

export default function EditAppointment() {
  return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
      <GeneralHeader/>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>Editar cita</Text>
      <EditBody/>
    </View>
  );
}