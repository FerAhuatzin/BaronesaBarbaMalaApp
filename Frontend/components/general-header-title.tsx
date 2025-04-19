import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { fontSizes } from "../constants/font-sizes";
import { CloseIcon } from "../constants/Icons";

interface Props {
  title: string;
}

export default function GeneralHeaderTitle({ title }: Props) {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
            <CloseIcon size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  container: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
    paddingTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: fontSizes.titles,
    marginLeft: 20,
  },
});
