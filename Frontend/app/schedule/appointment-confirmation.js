import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import AppointmentConfirmationFooter from "../../components/schedule/appointment-confirmation/appointment-confirmation-footer";
import GeneralHeader from "../../components/general-header";
import { commonStyles } from "../../constants/commonStyles";
import { useAppointment } from "@/context/AppointmentContext";

export default function AppointmentConfirmation() {
  const router = useRouter();
  const { resetAppointmentData } = useAppointment();

  useEffect(() => {
    resetAppointmentData();
  }, []);

  return (
    <View style={commonStyles.pageContainer}>
      <GeneralHeader />
      <View style={styles.content}>
        <Text style={commonStyles.sectionTitle}>¡Gracias por reservar con Barba mala!</Text>
        <Text style={commonStyles.text}>
          Se te envió un correo con los detalles de tu cita. Se recomienda llegar
          no más de 15 minutos de la hora de la cita para que se pueda respetar tu
          asiento. Recuerda que si tienes puntos en tu cuenta puedes utilizarlos
          para pagar tu servicio.
        </Text>
        <View style={commonStyles.widthContainer}>
          <Image 
            source={require("../../assets/images/Barbamala-logo.png")} 
            style={styles.image} 
            resizeMode="contain"
          />
        </View>
      </View>
      <AppointmentConfirmationFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
});
