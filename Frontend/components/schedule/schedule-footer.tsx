import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { ValidRoutes } from "../../constants/types";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { commonStyles } from "../../constants/commonStyles";

interface Props {
  next_screen: ValidRoutes;
  touchable_message: String;
}

export default function ScheduleFooter({
  next_screen,
  touchable_message,
}: Props) {
  const router = useRouter();
  return (
    <View style={commonStyles.containerFooter}>
      <View style={commonStyles.footer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={commonStyles.underlinedText}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(next_screen)}
          style={commonStyles.roundedButton}
        >
          <Text style={commonStyles.buttonText}>{touchable_message}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
