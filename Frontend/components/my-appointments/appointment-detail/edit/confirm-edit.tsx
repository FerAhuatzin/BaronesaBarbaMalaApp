import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { fontSizes } from "@/constants/font-sizes";

interface Props {
  onConfirmChanges: () => void;
}

export default function ConfirmEdit({ onConfirmChanges }: Props) {
  const router = useRouter();
  return (
    <View style={styles.container0}>
      <View style={styles.container}>
        <View />
        <TouchableOpacity
          onPress={onConfirmChanges}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>Confirmar</Text>
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
