import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CloseIcon } from "@/constants/Icons";
import { commonStyles } from "../constants/commonStyles";

export default function GeneralHeader() {
  const router = useRouter();
  return (
    <View style={commonStyles.header}>
      <TouchableOpacity onPress={() => router.replace("/(tabs)")} style={commonStyles.container}>
        <CloseIcon size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
});