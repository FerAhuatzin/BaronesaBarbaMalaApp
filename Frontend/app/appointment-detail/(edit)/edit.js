import { View, Text } from "react-native";
import React from 'react';
import GeneralHeaderTitle from "../../../components/general-header-title";
import EditBody from '../../../components/my-appointments/appointment-detail/edit/edit-body';

export default function EditAppointment() {
  return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
      <GeneralHeaderTitle title="Editar cita"/>
      <EditBody/>
    </View>
  );
}