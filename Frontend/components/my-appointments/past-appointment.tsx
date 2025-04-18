import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AppointmentDetails } from "../../types/appointment";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { colors } from "../../constants/colors";

interface PastAppointmentProps {
  appointment: AppointmentDetails;
}

export default function PastAppointment({ appointment }: PastAppointmentProps) {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.push(`/appointment-detail/${appointment.id}`)}>
      <View style={styles.contentContainer}>
        
        <View style={styles.rightContainer}>
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
        </View>
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
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    overflow: 'hidden'
  },
  contentContainer: {

    height: 140,
  },
  branchImage: {
    width: 120,
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoContainer: {
    padding: 10,
  },
  serviceText: {
    fontSize: fontSizes.body,
    marginBottom: 3,
  },
  captionText: {
    fontSize: fontSizes.captions,
    color: '#666',
    marginBottom: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  priceText: {
    fontSize: fontSizes.captions,
  },
  brandLogo: {
    width: 60,
    height: 20,
  },
}); 