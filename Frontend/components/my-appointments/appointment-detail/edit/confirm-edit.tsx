import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onConfirmChanges: () => void;
}

export default function ConfirmEdit({ onConfirmChanges }: Props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <TouchableOpacity onPress={onConfirmChanges}>
        <Text>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}