import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { commonStyles } from "../../../constants/commonStyles";

interface Props {
  onCancel: () => void;
}

export default function AppointmentDetailActions({ onCancel }: Props) {
  const router =  useRouter();
  return (
    <View style={[commonStyles.row, commonStyles.borderTop, commonStyles.widthContainer, styles.widthOverwrite]}>
      <TouchableOpacity onPress={onCancel}>
        <Text style={commonStyles.underlinedText}>Cancelar cita</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/appointment-detail/edit")} style={commonStyles.roundedButton}>
        <Text style={commonStyles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  widthOverwrite: {

  },
});
