import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeaderTitle from "../../../components/general-header-title";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";
import AssignContactBody from "../../../components/schedule/assign-contact/assign-contact-body";
import { fontSizes } from "../../../constants/font-sizes";
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeaderTitle title="Contacto" />
      <Text style={styles.title}>
        Pon tus nuevos datos de contacto.
      </Text>
      <AssignContactBody />
      <ConfirmEdit onConfirmChanges={handleConfirmChanges} />

      {showConfirmModal && (
        <View style={styles.container_canceling}>
          <ChangeNotice
            onChange={handleChangeContact}
            message="¿Seguro que quieres cambiar los datos de contacto de tu cita?"
            button_message="Cambiar dato"
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
