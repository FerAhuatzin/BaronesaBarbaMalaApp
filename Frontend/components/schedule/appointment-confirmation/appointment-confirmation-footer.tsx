import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function AppointmentConfirmationFooter() {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
}
