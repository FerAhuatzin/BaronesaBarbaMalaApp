import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function AppointmentDetailHeader() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Text>Cerrar</Text>
    </TouchableOpacity>
  );
}