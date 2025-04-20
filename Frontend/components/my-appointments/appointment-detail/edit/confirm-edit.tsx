import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { commonStyles } from "@/constants/commonStyles";

interface Props {
  onConfirmChanges: () => void;
}

export default function ConfirmEdit({ onConfirmChanges }: Props) {
  return (
    <View style={styles.container0}>
      <View style={commonStyles.footer}>
        <View />
        <TouchableOpacity
          onPress={onConfirmChanges}
          style={commonStyles.roundedButton}
        >
          <Text style={commonStyles.buttonText}>Confirmar</Text>
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
});
