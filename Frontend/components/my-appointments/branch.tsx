import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { openGoogleMaps } from "../../features/schedule/assign-branch/open-location";

interface props {
  lat: number;
  lng: number;
}

export default function Branch({ lat, lng }: props) {
  const router = useRouter();
  return (
    <View>
      <Text>Imagen branch</Text>
      <TouchableOpacity onPress={() => openGoogleMaps(lat, lng)}>
        <Text>Ver ubicación</Text>
      </TouchableOpacity>
    </View>
  );
}
