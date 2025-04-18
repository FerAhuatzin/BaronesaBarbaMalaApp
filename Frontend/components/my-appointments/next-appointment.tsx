import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AppointmentDetails } from "../../types/appointment";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { colors } from "../../constants/colors";

interface NextAppointmentProps {
  appointment: AppointmentDetails;
}

export default function NextAppointment({ appointment }: NextAppointmentProps) {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.push(`/appointment-detail/${appointment.id}`)}>
      <Image 
        source={appointment.branchImage ? { uri: appointment.branchImage } : require('../../assets/images/SplashImage.jpg')} 
        style={styles.branchImage} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.serviceText}>{appointment.service}</Text>
        <Text style={styles.captionText}>{appointment.branch}</Text>
        <Text style={styles.captionText}>{appointment.date}</Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.priceText}>Total: ${appointment.price}</Text>
        <Image 
          source={appointment.brand === 'baronesa' 
            ? require('../../assets/images/Baronesa-logo.png') 
            : require('../../assets/images/Barbamala-logo.png')} 
          style={styles.brandLogo} 
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 0,
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 5,
    overflow: 'hidden'
  },
  branchImage: {
    width: '100%',
    height: 150,
  },
  infoContainer: {
    padding: 15,
  },
  serviceText: {
    fontSize: fontSizes.subTitles,
    marginBottom: 5,
  },
  captionText: {
    fontSize: fontSizes.captions,
    color: '#666',
    marginBottom: 3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 5,
  },
  priceText: {
    fontSize: fontSizes.body,
  },
  brandLogo: {
    width: 80,
    height: 30,
  },
});

