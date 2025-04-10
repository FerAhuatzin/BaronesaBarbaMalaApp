import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import GeneralHeader from "../../components/general-header";
import Branch from "../../components/my-appointments/branch";
import AppointmentDetailActions from "../../components/my-appointments/appointment-detail/appointment-detail-actions";
import ChangeNotice from "../../components/my-appointments/appointment-detail/change-notice";

export default function AppointmentDetail() {
  const [showCancelModal, setShowCancelModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeader />
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Detalle cita
      </Text>
      <Branch lat={19.04014810319887} lng={-98.22719631779105} />
      <AppointmentDetailActions onCancel={() => setShowCancelModal(true)} />

      {showCancelModal && (
        <View style={styles.container_canceling}>
          <ChangeNotice onChange={() => setShowCancelModal(false)} message="¿Seguro que quieres cancelar tu cita?" button_message="Cancelar cita"/>
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
