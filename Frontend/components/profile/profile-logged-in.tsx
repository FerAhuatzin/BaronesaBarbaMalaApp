import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View} from "react-native";

interface Props {
    handleLogout: () => void;
}

export default function ProfileLoggedIn({handleLogout}: Props) {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}