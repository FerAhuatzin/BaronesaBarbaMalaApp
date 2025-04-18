import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import GeneralHeaderTitle from "../../components/general-header-title";
import AppointmentDetailBody from "../../components/my-appointments/appointment-detail/appointment-detail-body";
import AppointmentDetailActions from "../../components/my-appointments/appointment-detail/appointment-detail-actions";
import ChangeNotice from "../../components/my-appointments/appointment-detail/change-notice";
import { mockAppointments } from "../../components/my-appointments/mock-data";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeaderTitle title="Detalle de cita" />

      <AppointmentDetailBody appointment={appointment} />
      {appointment && appointment.status === "pending" && (
        <AppointmentDetailActions onCancel={() => setShowCancelModal(true)} />
      )}

      {showCancelModal && (
        <View style={styles.container_canceling}>
          <ChangeNotice
            onChange={() => setShowCancelModal(false)}
            message="¿Seguro que quieres cancelar tu cita?"
            button_message="Cancelar cita"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container_canceling: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)", // Fondo opaco
    justifyContent: "center",
    alignItems: "center",
  },
});
