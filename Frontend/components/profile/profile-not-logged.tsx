import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { StyleSheet } from "react-native";
import { GiftIcon, CalendarIcon } from "../../constants/Icons";
export default function ProfileNotLoggedIn() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Aún no has iniciado sesión con Baronesa, ¿Por qué hacerlo?
      </Text>
      <View style={styles.profitsContainer}>
        <View style={styles.profitContainer}>
          <CalendarIcon size={40} />
          <Text style={styles.profitText}>
            Registro de tus datos de forma automática al reservar.
          </Text>
        </View>
        <View style={styles.profitContainer}>
          <GiftIcon size={40} />
          <Text style={styles.profitText}>
            Con cada cita atendida gana el 10% de su costo en puntos para pagar
            tus siguientes citas.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/login")}>
        <Text style={styles.loginButtonText}>Iniciar sesión o registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    paddingTop: 20,
  },
  profitsContainer: {
    paddingVertical: 20,
  },
  profitContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: fontSizes.subTitles,
  },
  profitText: {
    fontSize: fontSizes.body,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: fontSizes.body,
  },
});
