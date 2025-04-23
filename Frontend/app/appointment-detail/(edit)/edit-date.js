import { useState } from "react";
import { View, Text } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeaderTitle from "../../../components/general-header-title";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";
import DateBody from "../../../components/schedule/assign-date/date-body";
import { commonStyles } from "../../../constants/commonStyles";

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
    <View style={commonStyles.pageContainer}>
      <GeneralHeaderTitle title="Fecha" />
      <Text style={commonStyles.sectionTitle}>
        Cambia la fecha de tu cita.
      </Text>
      <DateBody />
      <ConfirmEdit onConfirmChanges={handleConfirmChanges} />

      {showConfirmModal && (
        <ChangeNotice
          onChange={handleChangeDate}
          message="¿Seguro que quieres cambiar la fecha de tu cita?"
          button_message="Cambiar fecha"
        />
      )}
    </View>
  );
}
