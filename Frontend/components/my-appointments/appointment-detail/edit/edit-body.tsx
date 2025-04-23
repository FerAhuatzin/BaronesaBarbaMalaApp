import { useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import EditItem from "./edit-item";
import { commonStyles } from "@/constants/commonStyles";

export default function EditBody() {
  const router =  useRouter();
  return (
    <View style={[commonStyles.widthContainer, styles.flex]}>
        <Text style={[commonStyles.sectionTitle, styles.sectionTitleOverwrite]}>Selecciona que quieres editar de tus cita.</Text>
        <EditItem title="Servicio" next_screen="./edit-service" />
        <EditItem title="Fecha" next_screen="./edit-date" />
        <EditItem title="Profesional" next_screen="./edit-barber" />
        <EditItem title="Datos de contacto" next_screen="./edit-contact" />
    </View>
  );
}

const styles = StyleSheet.create({  
    flex: {
        flex: 1,
        backgroundColor: "white",
    },
    sectionTitleOverwrite: {
        width: "90%",
        alignSelf: "flex-start",
    },
});