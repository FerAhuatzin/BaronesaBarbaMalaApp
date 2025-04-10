import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onCancel: () => void;
}

export default function AppointmentDetailActions({ onCancel }: Props) {
  const router =  useRouter();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <TouchableOpacity onPress={onCancel}>
        <Text>Cancelar cita</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/appointment-detail/edit")}>
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
