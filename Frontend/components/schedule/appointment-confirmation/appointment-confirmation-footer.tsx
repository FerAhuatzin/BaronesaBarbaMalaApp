import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { commonStyles } from "@/constants/commonStyles";

export default function ScheduleFooter() {
  const router = useRouter();
  return (
    <View style={commonStyles.containerFooter}>
      <View style={commonStyles.footer}>
        <View />
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)")}
          style={commonStyles.roundedButton}
        >
          <Text style={commonStyles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
