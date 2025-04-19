import { fontSizes } from "@/constants/font-sizes";
import { router } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ChevronRightIcon } from "@/constants/Icons";
import { ValidRoutes } from "@/constants/types";


interface EditItemProps {
    title: string;
    next_screen: ValidRoutes;
}

export default function EditItem({ title, next_screen }: EditItemProps) {
  return (
    <TouchableOpacity
      onPress={() => router.push(next_screen)}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
      <ChevronRightIcon size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.subTitles,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
});
