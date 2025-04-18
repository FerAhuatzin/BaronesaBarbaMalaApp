import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { CloseIcon } from "../../../constants/Icons";
import { fontSizes } from "../../../constants/font-sizes";

interface Props {
    onChange: () => void;
    message?: string;
    button_message?: string;
}

export default function ChangeNotice({onChange, message, button_message}: Props) {
  const router = useRouter();
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onChange}>
          <CloseIcon size={30} />
        </TouchableOpacity>
        <Text style={styles.message}>
          {message}
        </Text>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.back()}>
          <Text style={styles.actionButtonText}>{button_message}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    padding: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: windowHeight / 2, // Asegura que ocupe al menos la mitad de la altura de la pantalla
    paddingBottom: 50,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 5,
  },
  message: {
    fontSize: fontSizes.subTitles,
    marginBottom: 30,
    marginTop: 60,
    textAlign: "center",
    fontWeight: "500",
  },
  actionButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  actionButtonText: {
    color: "white",
    fontSize: fontSizes.body,
  }
});

