import { useState } from "react";
import { View, Text } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeaderTitle from "../../../components/general-header-title";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";
import AssignContactBody from "../../../components/schedule/assign-contact/assign-contact-body";
import { commonStyles } from "../../../constants/commonStyles";

export default function EditContact() {
  const [showConfirmModal, setShowConfrimModal] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: ""
  });
  
  const handleConfirmChanges = () => {
    // Aquí guardaríamos los datos de contacto para la edición
    setShowConfrimModal(true);
  };
  
  const handleChangeContact = () => {
    // Aquí implementaríamos la lógica para guardar los cambios de contacto
    // y redireccionar al detalle de la cita
    setShowConfrimModal(false);
  };

  return (
    <View style={commonStyles.pageContainer}>
      <GeneralHeaderTitle title="Contacto" />
      <Text style={commonStyles.sectionTitle}>
        Pon tus nuevos datos de contacto.
      </Text>
      <AssignContactBody />
      <ConfirmEdit onConfirmChanges={handleConfirmChanges} />

      {showConfirmModal && (
        <ChangeNotice
          onChange={handleChangeContact}
          message="¿Seguro que quieres cambiar los datos de contacto de tu cita?"
          button_message="Cambiar dato"
        />
      )}
    </View>
  );
}
