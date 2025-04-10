import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function Appointment() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/appointment-detail")}>
      <Text>Ver cita</Text>
    </TouchableOpacity>
  );
}