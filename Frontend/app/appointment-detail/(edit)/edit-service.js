import { View, Text, StyleSheet } from "react-native";
import ChangeNotice from "../../../components/my-appointments/appointment-detail/change-notice";
import GeneralHeaderTitle from "../../../components/general-header-title";
import ConfirmEdit from "../../../components/my-appointments/appointment-detail/edit/confirm-edit";
import { useState } from "react";
import ServiceOptions from "../../../components/schedule/assign-service/service-options";
import { mockServices } from "../../../components/schedule/assign-service/mock-data";
import { fontSizes } from "../../../constants/font-sizes";
export default function EditService() {
  const [showConfirmModal, setShowConfrimModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  
  const handleUpdateTotal = (newTotal) => {
    setTotal(newTotal);
  };
  
  const handleConfirmChanges = () => {
    // Aquí guardaríamos los servicios seleccionados para la edición
    setShowConfrimModal(true);
  };
  
  const handleChangeService = () => {
    // Aquí implementaríamos la lógica para guardar los cambios
    // y redireccionar al detalle de la cita
    setShowConfrimModal(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeaderTitle title="Servicio" />
      <Text style={styles.title}>
        Cambia tu servicio.
      </Text>
      <ServiceOptions 
        services={mockServices} 
        onUpdateTotal={handleUpdateTotal} 
      />
      <ConfirmEdit onConfirmChanges={handleConfirmChanges} />

      {showConfirmModal && (
        <View style={styles.container_canceling}>
          <ChangeNotice
            onChange={handleChangeService}
            message="¿Seguro que quieres cambiar tu servicio?"
            button_message="Cambiar servicio"
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
