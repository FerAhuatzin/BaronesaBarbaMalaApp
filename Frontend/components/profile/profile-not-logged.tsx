import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { StyleSheet } from "react-native";
import { GiftIcon, CalendarIcon } from "../../constants/Icons";
import { commonStyles } from "../../constants/commonStyles";

export default function ProfileNotLoggedIn() {
  const router = useRouter();
  return (
    <View style={[commonStyles.widthContainer, styles.container]}>
      <Text style={commonStyles.subtitle}>
        Aún no has iniciado sesión con Baronesa, ¿Por qué hacerlo?
      </Text>
      <View style={styles.profitsContainer}>
        <View style={[commonStyles.row, styles.profitContainer]}>
          <CalendarIcon size={40} />
          <View style={styles.profitTextContainer}>
          <Text style={styles.profitText}>
            Registro de tus datos de forma automática al reservar.
          </Text>
          </View>
        </View>
        <View style={[commonStyles.row, styles.profitContainer]}>
          <GiftIcon size={40} />
          <View style={styles.profitTextContainer}>
          <Text style={styles.profitText}>
            Con cada cita atendida gana el 10% de su costo en puntos para pagar
            tus siguientes citas.
          </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={commonStyles.primaryButton} onPress={() => router.push("/login")}>
        <Text style={commonStyles.buttonText}>Iniciar sesión o registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 10,
  },
  profitTextContainer: {
    flex: 1,
  },
  profitsContainer: {
    paddingVertical: 20,
  },
  profitContainer: {
    paddingVertical: 15,
  },
  profitText: {
    fontSize: fontSizes.body,
    paddingLeft: 10,
  },
});
