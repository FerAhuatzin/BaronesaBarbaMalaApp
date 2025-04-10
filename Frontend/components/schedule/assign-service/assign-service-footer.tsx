import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function AssignServiceFooter() {
  const router = useRouter();
  return (
    <View>
        <Text>Cantidad de dinero</Text>
      <TouchableOpacity onPress={() => router.push("/schedule/assign-date")}>
        <Text>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}
