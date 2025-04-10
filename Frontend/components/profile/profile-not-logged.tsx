import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileNotLoggedIn() {
  const router = useRouter();
  return (
    <View>
      <Text>Aún no has iniciado sesión con Baronesa, ¿Por qué hacerlo?</Text>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Iniciar sesión o registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}
