import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { CloseIcon } from "../../constants/Icons";
import { colors } from "../../constants/colors";
import { fontSizes } from "../../constants/font-sizes";
interface props {
  progress: number;
  totalSteps: number;
}

export default function ScheduleHeader({ progress, totalSteps }: props) {
  const router = useRouter();
  const currentStep = Math.floor(progress / (100 / totalSteps));
  return (
    <View style={styles.container}>
      <View style={styles.containerFlex}>
        <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
          <CloseIcon size={30} />
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
        </View>
      </View>
      <View style={styles.containerFlex}>
        <View style={styles.spacer}/>
        <Text style={styles.progressText}>
          {currentStep} de {totalSteps} pasos completados.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: "90%",
    alignSelf: "center",
  },
  containerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressBarContainer: {
    width: "85%",
  },
  closeButton: {
    width: "10%",
  },
  progressBar: {
    height: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
  },
  progressBarFill: {
    height: 15,
    backgroundColor: colors.barba_mala,
    borderRadius: 15,
  },
  spacer: {
    width: "10%",
  },
  progressText: {
    width: "85%",
    fontSize: fontSizes.captions,
    color: '#666',
  },
});
