import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { fontSizes } from "../../../constants/font-sizes";

interface Props {
  onCancel: () => void;
}

export default function AppointmentDetailActions({ onCancel }: Props) {
  const router =  useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCancel}>
        <Text style={styles.cancelButton}>Cancelar cita</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/appointment-detail/edit")} style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  cancelButton: {
    fontSize: fontSizes.body,
    textDecorationLine: "underline",
  },
  editButton: {
    width: "40%",
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  editButtonText: {
    fontSize: fontSizes.captions,
    color: "white",
  },
  

});
