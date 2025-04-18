import { AppointmentDetails } from "@/types/appointment";
import { useRouter } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MapPinIcon } from "../../../constants/Icons";
import { openGoogleMaps } from "../../../features/schedule/assign-branch/open-location";
import { fontSizes } from "../../../constants/font-sizes";

interface Props {
  appointment: AppointmentDetails;
}

export default function AppointmentDetailBody({ appointment }: Props) {
  const router = useRouter();

  if (!appointment) {
    return <Text>Cargando...</Text>; // O cualquier otro indicador de carga
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          appointment.branchImage
            ? { uri: appointment.branchImage }
            : require("../../../assets/images/SplashImage.jpg")
        }
        style={styles.branchImage}
      />
      <View style={styles.infoRow}>
        <Text style={styles.serviceName}>{appointment.service}</Text>
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => openGoogleMaps(appointment.latitude, appointment.longitude)}
        >
          <MapPinIcon size={16} color="white" />
          <Text style={styles.locationButtonText}>Ver ubicación</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.captionText}>{appointment.branch}</Text>
      <Text style={styles.captionText}>{appointment.date}</Text>
      <View style={styles.captionRow}>
        <Text style={styles.captionText}>Atendido por: {appointment.stylist}</Text>
        <Text style={styles.priceText}>Total: ${appointment.price}</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  branchImage: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  captionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  serviceName: {
    fontSize: fontSizes.subTitles,
    width: "58%",
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
    fontSize: fontSizes.captions,
    color: "gray",
    paddingBottom: 3,
  },
  priceText: {
    fontSize: fontSizes.captions,
    color: "black",
  },
});
