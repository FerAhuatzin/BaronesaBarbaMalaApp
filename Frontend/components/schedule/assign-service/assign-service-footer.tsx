import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { ValidRoutes } from "../../../constants/types";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../../constants/font-sizes";
interface Props {
  cost: number;
}

export default function AssignServiceFooter({ cost}: Props) {
  const router = useRouter();
  return (
    <View style={styles.container0}>
       <View style={styles.container}>
      <Text style={styles.costText}>Total: ${cost}</Text>
      <TouchableOpacity onPress={() => router.push("/schedule/assign-date")} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container0:{
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
  costText: {
    fontSize: fontSizes.body,
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
