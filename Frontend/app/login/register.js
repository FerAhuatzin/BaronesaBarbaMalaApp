import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import GeneralHeader from "../../components/general_header";

export default function Register() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
      <GeneralHeader />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Registrarse
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
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}
