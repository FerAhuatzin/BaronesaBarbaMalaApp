import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { ValidRoutes } from "../../constants/types";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
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
    <View style={styles.container0}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(next_screen)}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>{touchable_message}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container0: {
    backgroundColor: "white",
    height: 70,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  backButton: {
    fontSize: fontSizes.body,
    textDecorationLine: "underline",
  },
  nextButton: {
    width: "40%",
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  nextButtonText: {
    fontSize: fontSizes.captions,
    color: "white",
  },
});
