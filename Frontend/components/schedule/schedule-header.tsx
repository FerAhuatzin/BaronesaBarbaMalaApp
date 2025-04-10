import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

interface props {
  progress: number;
}

export default function ScheduleHeader({ progress }: props) {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
      <Text>Cerrar</Text>
    </TouchableOpacity>
  );
}
