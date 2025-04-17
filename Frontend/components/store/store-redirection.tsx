import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { openStore } from "../../features/store/open-store";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";

export default function StoreRedirection() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Todavía seguimos trabajando en traer la tienda en línea a la aplicación
      </Text>
      <TouchableOpacity onPress={openStore}>
        <Text style={styles.storeButtonText}>Ir a la tienda en linea</Text>
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
  subtitle: {
    fontSize: fontSizes.subTitles,
    paddingBottom: 20,
  },
  storeButtonText: {
    fontSize: fontSizes.subTitles,
    textDecorationLine: "underline",
  },
});

