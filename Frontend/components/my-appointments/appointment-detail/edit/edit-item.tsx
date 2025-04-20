import { fontSizes } from "@/constants/font-sizes";
import { router } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ChevronRightIcon } from "@/constants/Icons";
import { ValidRoutes } from "@/constants/types";
import { commonStyles } from "@/constants/commonStyles";

interface EditItemProps {
    title: string;
    next_screen: ValidRoutes;
}

export default function EditItem({ title, next_screen }: EditItemProps) {
  return (
    <TouchableOpacity
      onPress={() => router.push(next_screen)}
      style={[commonStyles.row, styles.button]}
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
        paddingVertical: 20,
    },
});
