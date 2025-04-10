import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import GeneralHeader from "../../components/general_header";

export default function Login() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GeneralHeader />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Iniciar sesión
      </Text>

      <TouchableOpacity
        onPress={() =>
          router.replace({
            pathname: "/(tabs)/profile",
            params: { logged: "true" },
          })
        }
        style={{ marginBottom: 20 }}
      >
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login/register")}>
        <Text>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}
