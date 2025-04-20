import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AppointmentDetails } from "../../types/appointment";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { commonStyles } from "../../constants/commonStyles";

interface NextAppointmentProps {
  appointment: AppointmentDetails;
}

export default function NextAppointment({ appointment }: NextAppointmentProps) {
  const router = useRouter();
  return (
    <TouchableOpacity style={commonStyles.cardContainer} onPress={() => router.push(`/appointment-detail/${appointment.id}`)}>
      <Image 
        source={appointment.branchImage ? { uri: appointment.branchImage } : require('../../assets/images/SplashImage.jpg')} 
        style={commonStyles.branchImage} 
      />
      <View style={styles.infoContainer}>
        <Text style={commonStyles.serviceText}>{appointment.service}</Text>
        <Text style={commonStyles.captionText}>{appointment.branch}</Text>
        <Text style={commonStyles.captionText}>{appointment.date}</Text>
      </View>
      
      <View style={[commonStyles.row, styles.footer]}>
        <Text style={styles.priceText}>Total: ${appointment.price}</Text>
        <Image 
          source={appointment.brand === 'baronesa' 
            ? require('../../assets/images/Baronesa-logo.png') 
            : require('../../assets/images/Barbamala-logo.png')} 
          style={[commonStyles.brandLogo, styles.brandLogo]} 
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 15,
  },
  footer: {
    padding: 15,
    marginTop: 5,
  },
  priceText: {
    fontSize: fontSizes.body,
  },
  brandLogo: {
    width: 80,
  },
});

