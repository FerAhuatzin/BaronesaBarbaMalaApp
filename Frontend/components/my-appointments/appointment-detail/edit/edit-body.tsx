import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { fontSizes } from "@/constants/font-sizes";
import EditItem from "./edit-item";


export default function EditBody() {
  const router =  useRouter();
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Selecciona que quieres editar de tus cita.</Text>
        <EditItem title="Servicio" next_screen="./edit-service" />
        <EditItem title="Fecha" next_screen="./edit-date" />
        <EditItem title="Profesional" next_screen="./edit-barber" />
        <EditItem title="Datos de contacto" next_screen="./edit-contact" />
    </View>
  );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "90%",
        alignSelf: "center",
    },
    title: {
        fontSize: fontSizes.largeSubTitles,
        marginBottom: 20,
        marginTop: 20,
    },
});