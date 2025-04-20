import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { openGoogleMaps } from "../../../features/schedule/assign-branch/open-location";
import { BranchDetails } from "../../../types/appointment";
import { MapPinIcon } from "../../../constants/Icons";
import { fontSizes } from "../../../constants/font-sizes";
import { commonStyles } from "../../../constants/commonStyles";

interface props {
  branch: BranchDetails;
}

export default function Branch({ branch }: props) {
  const router = useRouter();
  return (
    <TouchableOpacity 
      style={[commonStyles.widthContainer, styles.container]}
      onPress={() => router.push("/schedule")}
    >
      <Image 
        source={{ uri: branch.image }} 
        style={commonStyles.branchImage} 
      />
      <View style={[commonStyles.row, styles.infoRow]}>
        <Text style={[commonStyles.serviceText, styles.branchName]}>{branch.name}</Text>
        <TouchableOpacity 
          style={[commonStyles.roundedButton, styles.locationButton]}
          onPress={() => openGoogleMaps(branch.latitude, branch.longitude)}
        >
          <View style={styles.locationButtonInner}>
            <MapPinIcon size={16} color="white" />
            <Text style={styles.locationButtonText}>Ver ubicación</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    width: "60%",
    paddingRight: 10,
  },
  infoRow: {
    paddingTop: 10,
  },
  locationButton: {
    justifyContent: "center",
    alignItems: "center",
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
