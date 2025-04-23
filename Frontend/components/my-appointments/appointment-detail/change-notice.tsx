import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { CloseIcon } from "../../../constants/Icons";
import { commonStyles } from "../../../constants/commonStyles";

interface Props {
    onChange: () => void;
    message?: string;
    button_message?: string;
}

export default function ChangeNotice({onChange, message, button_message}: Props) {
  const router = useRouter();
  return (
    <View style={commonStyles.modalOverlay}>
      <View style={[commonStyles.modalContainer, styles.customHeight]}>
        <TouchableOpacity style={commonStyles.closeButton} onPress={onChange}>
          <CloseIcon size={30} />
        </TouchableOpacity>
        <Text style={[commonStyles.centeredMessage, styles.messageSpacing]}>
          {message}
        </Text>
        <TouchableOpacity style={commonStyles.actionButton} onPress={() => router.back()}>
          <Text style={commonStyles.buttonText}>{button_message}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  customHeight: {
    minHeight: windowHeight / 3, // Asegura que ocupe al menos un tercio de la altura de la pantalla
  },
  messageSpacing: {
    marginTop: 60,
    marginBottom: 30,
  }
});

