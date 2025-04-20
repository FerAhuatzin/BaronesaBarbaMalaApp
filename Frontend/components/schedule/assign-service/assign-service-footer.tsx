import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../../constants/font-sizes";
import { commonStyles } from "../../../constants/commonStyles";
interface Props {
  cost: number;
}

export default function AssignServiceFooter({ cost}: Props) {
  const router = useRouter();
  return (
    <View style={commonStyles.containerFooter}>
       <View style={commonStyles.footer}>
      <Text style={styles.costText}>Total: ${cost}</Text>
      <TouchableOpacity onPress={() => router.push("/schedule/assign-date")} style={commonStyles.roundedButton}>
        <Text style={commonStyles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  costText: {
    fontSize: fontSizes.body,
  },

});
