import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { openStore } from "../../features/store/open-store";
import { StyleSheet } from "react-native";
import { commonStyles } from "../../constants/commonStyles";

export default function StoreRedirection() {
  const router = useRouter();
  return (
    <View style={[commonStyles.widthContainer, styles.container]}>
      <Text style={commonStyles.subtitle}>
        Todavía seguimos trabajando en traer la tienda en línea a la aplicación
      </Text>
      <TouchableOpacity onPress={openStore}>
        <Text style={commonStyles.underlinedText}>Ir a la tienda en linea</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 10,
  },
});

