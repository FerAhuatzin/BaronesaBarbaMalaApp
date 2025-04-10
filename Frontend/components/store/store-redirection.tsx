import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { openStore } from "../../features/store/open-store";

export default function StoreRedirection() {
  const router = useRouter();
  return (
    <View>
      <Text>
        Todavía seguimos trabajando en traer la tienda en línea a la aplicación
      </Text>
      <TouchableOpacity onPress={openStore}>
        <Text>Ir a la tienda en linea</Text>
      </TouchableOpacity>
    </View>
  );
}
