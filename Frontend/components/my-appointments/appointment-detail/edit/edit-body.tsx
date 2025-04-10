import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function EditBody() {
  const router =  useRouter();
  return (
    <View>
        <Text>Selecciona que quieres editar de tus citas</Text>
        <TouchableOpacity onPress={() => router.push("/appointment-detail/edit-service")}>
            <Text>Servicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/appointment-detail/edit-date")}>
            <Text>Fecha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/appointment-detail/edit-barber")}>
            <Text>Profesional</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/appointment-detail/edit-contact")}>
            <Text>Datos de contacto</Text>
        </TouchableOpacity>
    </View>
  );
}
