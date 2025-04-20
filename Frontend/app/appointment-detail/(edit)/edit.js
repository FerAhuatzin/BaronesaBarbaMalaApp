import { View } from "react-native";
import React from 'react';
import GeneralHeaderTitle from "../../../components/general-header-title";
import EditBody from '../../../components/my-appointments/appointment-detail/edit/edit-body';
import { commonStyles } from "../../../constants/commonStyles";

export default function EditAppointment() {
  return (
    <View style={commonStyles.pageContainer}>
      <GeneralHeaderTitle title="Editar cita"/>
      <EditBody/>
    </View>
  );
}