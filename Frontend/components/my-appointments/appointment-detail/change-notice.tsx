import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

interface Props {
    onChange: () => void;
    message?: string;
    button_message?: string;
  }

  
export default function ChangeNotice({onChange, message, button_message}: Props) {
  const router = useRouter();
  return (
    <View
      style={styles.container}
    >
        <TouchableOpacity onPress={onChange}>
        <Text>No</Text>
        </TouchableOpacity>
      <Text style={{ marginBottom: 10 }}>
        {message}
      </Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>{button_message}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
        width: "80%",
        alignItems: "center",
  },
});

