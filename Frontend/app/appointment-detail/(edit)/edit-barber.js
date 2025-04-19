import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeaderTitle from "../../../components/general-header-title";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";
import AssignBarberBody from "../../../components/schedule/assign-barber/assign-barber-body";
import { fontSizes } from "../../../constants/font-sizes";
export default function EditBarber() {
  const [showConfirmModal, setShowConfrimModal] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState(null);
  
  const handleConfirmChanges = () => {
    // Aquí guardaríamos el barbero seleccionado para la edición
    setShowConfrimModal(true);
  };
  
  const handleChangeBarber = () => {
    // Aquí implementaríamos la lógica para guardar los cambios del barbero
    // y redireccionar al detalle de la cita
    setShowConfrimModal(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeaderTitle title="Profesional" />
      <Text style={styles.title}>
        Selecciona tu nuevo especialista.
      </Text>
      <AssignBarberBody />
      <ConfirmEdit onConfirmChanges={handleConfirmChanges} />

      {showConfirmModal && (
        <View style={styles.container_canceling}>
          <ChangeNotice
            onChange={handleChangeBarber}
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
  title: {
    fontSize: fontSizes.largeSubTitles,
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
  },
});
