import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { openGoogleMaps } from "../../../features/schedule/assign-branch/open-location";
import { BranchDetails } from "../../../types/appointment";
import { MapPinIcon } from "../../../constants/Icons";
import { fontSizes } from "../../../constants/font-sizes";
import { commonStyles } from "../../../constants/commonStyles";
import { useAppointment } from "@/context/AppointmentContext";

interface props {
  branch: BranchDetails;
}

export default function Branch({ branch }: props) {
  const router = useRouter();
  const { updateAppointmentData } = useAppointment();

  const handleBranchSelection = () => {
    updateAppointmentData({
      branchId: branch.id,
      branch: branch.name
    });
    router.push("/schedule");
  };

  return (
    <TouchableOpacity 
      style={[ commonStyles.cardContainer, commonStyles.widthContainer]}
      onPress={handleBranchSelection}
    >
      <Image 
        source={{ uri: branch.image }} 
        style={commonStyles.branchImage} 
      />
      <TouchableOpacity 
          style={[ styles.locationButton]}
          onPress={() => openGoogleMaps(branch.latitude, branch.longitude)}
        >
          <View style={styles.locationButtonInner}>
            <MapPinIcon size={20} color="white" />
          </View>
        </TouchableOpacity>
        <Text style={[commonStyles.serviceText, styles.branchName]}>Reservar en {branch.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "white",

  },
  branchName: {
    padding: 10,
  },
  infoRow: {
    paddingTop: 10,
  },
  locationButton: {
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 20,
    padding: 10,
  },
  locationButtonInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationButtonText: {
    color: "white",
    marginLeft: 5,
    fontSize: fontSizes.captions,
  }
});
