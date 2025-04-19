import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeaderTitle from "../../../components/general-header-title";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";
import DateBody from "../../../components/schedule/assign-date/date-body";
import { fontSizes } from "../../../constants/font-sizes";
export default function EditDate() {
  const [showConfirmModal, setShowConfrimModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const handleConfirmChanges = () => {
    // Aquí guardaríamos la fecha y hora seleccionada para la edición
    setShowConfrimModal(true);
  };
  
  const handleChangeDate = () => {
    // Aquí implementaríamos la lógica para guardar los cambios de fecha
    // y redireccionar al detalle de la cita
    setShowConfrimModal(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeaderTitle title="Fecha" />
      <Text style={styles.title}>
        Cambia la fecha de tu cita.
      </Text>
      <DateBody />
      <ConfirmEdit onConfirmChanges={handleConfirmChanges} />

      {showConfirmModal && (
        <View style={styles.container_canceling}>
          <ChangeNotice
            onChange={handleChangeDate}
            message="¿Seguro que quieres cambiar la fecha de tu cita?"
            button_message="Cambiar fecha"
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
