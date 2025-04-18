import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { openGoogleMaps } from "../../../features/schedule/assign-branch/open-location";
import { BranchDetails } from "../../../types/appointment";
import { MapPinIcon } from "../../../constants/Icons";
import { fontSizes } from "../../../constants/font-sizes";

interface props {
  branch: BranchDetails;
}

export default function Branch({ branch }: props) {
  const router = useRouter();
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => router.push("/schedule")}
    >
      <Image 
        source={{ uri: branch.image }} 
        style={styles.branchImage} 
      />
      <View style={styles.infoRow}>
        <Text style={styles.branchName}>{branch.name}</Text>
        <TouchableOpacity 
          style={styles.locationButton}
          onPress={() => openGoogleMaps(branch.latitude, branch.longitude)}
        >
          <MapPinIcon size={16} color="white" />
          <Text style={styles.locationButtonText}>Ver ubicación</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "white",
  },
  branchImage: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  branchName: {
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
  }
});
