import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { fontSizes } from "../constants/font-sizes";
import { CloseIcon } from "../constants/Icons";
import { commonStyles } from "../constants/commonStyles";

interface Props {
  title: string;
}

export default function GeneralHeaderTitle({ title }: Props) {
  const router = useRouter();
  return (
    <View style={commonStyles.header}>
      <View style={[commonStyles.container, styles.containerWithRow]}>
        <TouchableOpacity onPress={() => router.back()}>
            <CloseIcon size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWithRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: fontSizes.titles,
    marginLeft: 20,
  },
});
