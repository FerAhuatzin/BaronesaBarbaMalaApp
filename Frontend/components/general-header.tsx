import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CloseIcon } from "@/constants/Icons";

export default function GeneralHeader() {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.replace("/(tabs)")} style={styles.container}>
        <CloseIcon size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  container: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    paddingTop: 30,
    marginBottom: 10,
  },
});