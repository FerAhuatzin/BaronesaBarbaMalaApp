import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { ValidRoutes } from "../../constants/types";

interface Props {
  next_screen: ValidRoutes;
  touchable_message: String;
}

export default function ScheduleFooter({ next_screen, touchable_message}: Props) {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Atrás</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push(next_screen)}>
        <Text>{touchable_message}</Text>
      </TouchableOpacity>
    </View>
  );
}
