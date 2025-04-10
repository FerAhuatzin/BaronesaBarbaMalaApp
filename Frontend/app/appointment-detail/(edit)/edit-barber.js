import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeader from "../../../components/general_header";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";

export default function EditService() {
  const [showConfirmModal, setShowConfrimModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeader />
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 20 }}>
        Editar especialista
      </Text>
      <ConfirmEdit onConfirmChanges={() => setShowConfrimModal(true)} />

      {showConfirmModal && (
        <View style={styles.container_canceling}>
          <ChangeNotice
            onChange={() => setShowConfrimModal(false)}
            message="¿Seguro que quieres cambiar tu especialista?"
            button_message="Cambiar especialista"
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
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
