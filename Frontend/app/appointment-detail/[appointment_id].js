import { View } from "react-native";
import React, { useEffect, useState } from "react";
import GeneralHeaderTitle from "../../components/general-header-title";
import AppointmentDetailBody from "../../components/my-appointments/appointment-detail/appointment-detail-body";
import AppointmentDetailActions from "../../components/my-appointments/appointment-detail/appointment-detail-actions";
import ChangeNotice from "../../components/my-appointments/appointment-detail/change-notice";
import { mockAppointments } from "../../components/my-appointments/mock-data";
import { useLocalSearchParams } from "expo-router";
import { commonStyles } from "../../constants/commonStyles";

export default function AppointmentDetail() {
  const { appointment_id } = useLocalSearchParams();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [appointment, setAppointment] = useState(null);
  useEffect(() => {
    const appointment_search = mockAppointments.find(
      (appointment) => appointment.id === appointment_id
    );
    if (appointment_search) {
      setAppointment(appointment_search);
    } else {
      console.warn(`No se encontró una cita con el ID: ${appointment_id}`);
    }
  }, [appointment_id]);

  return (
    <View style={commonStyles.pageContainer}>
      <GeneralHeaderTitle title="Detalle de cita" />

      <AppointmentDetailBody appointment={appointment} />
      {appointment && appointment.status === "pending" && (
        <AppointmentDetailActions onCancel={() => setShowCancelModal(true)} />
      )}

      {showCancelModal && (
        <ChangeNotice 
          onChange={() => setShowCancelModal(false)} 
          message="¿Seguro que quieres cancelar tu cita?" 
          button_message="Cancelar cita"
        />
      )}
    </View>
  );
}
