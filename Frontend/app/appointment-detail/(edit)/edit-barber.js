import { useState } from "react";
import { View, Text } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeaderTitle from "../../../components/general-header-title";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";
import AssignBarberBody from "../../../components/schedule/assign-barber/assign-barber-body";
import { commonStyles } from "../../../constants/commonStyles";

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
    <View style={commonStyles.pageContainer}>
      <GeneralHeaderTitle title="Profesional" />
      <Text style={commonStyles.sectionTitle}>
        Selecciona tu nuevo especialista.
      </Text>
      <AssignBarberBody />
      <ConfirmEdit onConfirmChanges={handleConfirmChanges} />

      {showConfirmModal && (
        <ChangeNotice
          onChange={handleChangeBarber}
          message="¿Seguro que quieres cambiar tu especialista?"
          button_message="Cambiar especialista"
        />
      )}
    </View>
  );
}
