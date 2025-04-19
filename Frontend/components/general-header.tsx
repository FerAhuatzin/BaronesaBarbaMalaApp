import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { CloseIcon } from "@/constants/Icons";

export default function GeneralHeader() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
        <CloseIcon size={30} />
    </TouchableOpacity>
  );
}