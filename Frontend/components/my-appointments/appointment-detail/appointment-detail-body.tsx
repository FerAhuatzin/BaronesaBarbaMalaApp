import { AppointmentDetails } from "@/types/appointment";
import { useRouter } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MapPinIcon } from "../../../constants/Icons";
import { openGoogleMaps } from "../../../features/schedule/assign-branch/open-location";
import { fontSizes } from "../../../constants/font-sizes";
import { commonStyles } from "../../../constants/commonStyles";

interface Props {
  appointment: AppointmentDetails;
}

export default function AppointmentDetailBody({ appointment }: Props) {
  const router = useRouter();

  if (!appointment) {
    return <Text>Cargando...</Text>; // O cualquier otro indicador de carga
  }

  return (
    <View style={commonStyles.widthContainer}>
      <Image
        source={
          appointment.branchImage
            ? { uri: appointment.branchImage }
            : require("../../../assets/images/SplashImage.jpg")
        }
        style={commonStyles.branchImage}
      />
      <View style={[commonStyles.row, styles.infoRow]}>
        <Text style={commonStyles.serviceText}>{appointment.service}</Text>
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => openGoogleMaps(appointment.latitude, appointment.longitude)}
        >
          <MapPinIcon size={16} color="white" />
          <Text style={styles.locationButtonText}>Ver ubicación</Text>
        </TouchableOpacity>
      </View>
      <Text style={commonStyles.captionText}>{appointment.branch}</Text>
      <Text style={commonStyles.captionText}>{appointment.date}</Text>
      <View style={commonStyles.row}>
        <Text style={styles.captionText}>Atendido por: {appointment.stylist}</Text>
        <Text style={styles.priceText}>Total: ${appointment.price}</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  locationButton: {
    width: "40%",
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  locationButtonText: {
    color: "white",
    marginLeft: 5,
    fontSize: fontSizes.captions,
  },
  captionText: {
    fontSize: fontSizes.body,
    color: "gray",
    paddingBottom: 3,
  },
  priceText: {
    fontSize: fontSizes.body,
    color: "black",
  },
});
