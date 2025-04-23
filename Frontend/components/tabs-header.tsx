import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { fontSizes } from "../constants/font-sizes";
import { commonStyles } from "../constants/commonStyles";

interface Props {
  title: string;
}

export default function TabsHeader({ title }: Props) {
  return (
    <View style={commonStyles.header}>
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
});
