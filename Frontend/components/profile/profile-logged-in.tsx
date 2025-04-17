import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { StyleSheet } from "react-native";

interface ProfileLoggedInProps {
  handleLogout: () => void;
}

export default function ProfileLoggedIn({
  handleLogout,
}: ProfileLoggedInProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Puntos: con cada cita atendida gana el 10% de su costo en puntos para
        pagar tus siguientes citas.
      </Text>
      
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.loginButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    paddingTop: 30,
  },
  subtitle: {
    fontSize: fontSizes.subTitles,
  },
  loginButtonText: {
    fontSize: fontSizes.subTitles,
    textDecorationLine: "underline",
  },
});
