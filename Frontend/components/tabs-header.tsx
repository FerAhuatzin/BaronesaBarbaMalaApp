import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { fontSizes } from "../constants/font-sizes";

interface Props {
  title: string;
}

export default function TabsHeader({ title }: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
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
    backgroundColor: "white",
    alignSelf: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: fontSizes.titles,
  },
});
